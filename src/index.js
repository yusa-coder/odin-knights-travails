const knightMoves = require('./knightMoves');

console.log('--- Test 1 ---');
knightMoves([0, 0], [1, 2]);

console.log('\n--- Test 2 ---');
knightMoves([3, 3], [0, 0]);

console.log('\n--- Test 3 ---');
knightMoves([0, 0], [7, 7]);

console.log('\n--- Test 4 ---');
knightMoves([3, 3], [4, 3]);