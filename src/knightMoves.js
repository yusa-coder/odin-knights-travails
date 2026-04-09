function knightMoves(start, end) {
  const offsets = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  const onBoard = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

  const startKey = `${start[0]},${start[1]}`;
  const endKey = `${end[0]},${end[1]}`;
  
  // If the start and end are the same
  if (startKey === endKey) {
    console.log(`You made it in 0 moves! Here's your path:\n[${start}]`);
    return [start];
  }

  const visited = new Set([startKey]);
  const parent = new Map();
  parent.set(startKey, null);
  const queue = [start];

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    const currKey = `${cx},${cy}`;

    if (currKey === endKey) {
      const path = [];
      let key = endKey;
      while (key !== null) {
        const [x, y] = key.split(',').map(Number);
        path.unshift([x, y]);
        key = parent.get(key);
      }
      
      const moves = path.length - 1;
      console.log(`You made it in ${moves} moves! Here's your path:`);
      path.forEach(pos => console.log(pos));
      return path;
    }

    for (const [dx, dy] of offsets) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (onBoard(nx, ny)) {
        const nKey = `${nx},${ny}`;
        if (!visited.has(nKey)) {
          visited.add(nKey);
          parent.set(nKey, currKey);
          queue.push([nx, ny]);
        }
      }
    }
  }

  return null;
}

// Export the function for use in other files
module.exports = knightMoves;