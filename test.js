import assert from "node:assert";
import pipper from "./index.js";

const size = 10;
const sizeOffset = size * 1.8;
const c = 100;

Array.from({ length: 12 }).forEach((_, i) => {
  assert.strictEqual(pipper(i + 1, size, c, c).length, i + 1);
});

assert.strictEqual(pipper(13, size, c, c).length, 0);

assert.deepEqual(pipper(1, 0, c, c), [[c, c]]);

assert.deepEqual(pipper(2, 0, c, c), [
  [c, c],
  [c, c],
]);

assert.deepEqual(pipper(3, size, c, c), [
  [c - sizeOffset, c - sizeOffset], // top left
  [c, c], // center
  [c + sizeOffset, c + sizeOffset], // bottom right
]);
