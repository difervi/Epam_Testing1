const assert = require('assert');
const NumbersValidator = require('../src/NumbersValidator');

describe('NumbersValidator', function () {
  const validator = new NumbersValidator();

  describe('#isNumberEven()', function () {
    it('should return true for even numbers', function () {
      assert.strictEqual(validator.isNumberEven(4), true);
    });
    it('should throw error for non-number inputs', function () {
      assert.throws(() => validator.isNumberEven('4'), Error);
    });
  });

  describe('#getEvenNumbersFromArray()', function () {
    it('should return only even numbers from array', function () {
      assert.deepStrictEqual(validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
    });
    it('should throw error for non-array inputs', function () {
      assert.throws(() => validator.getEvenNumbersFromArray("not an array"), Error);
    });
  });

  describe('#isAllNumbers()', function () {
    it('should return true if all elements are numbers', function () {
      assert.strictEqual(validator.isAllNumbers([1, 2, 3]), true);
    });
    it('should return false if any element is not a number', function () {
      assert.strictEqual(validator.isAllNumbers([1, '2', 3]), false);
    });
  });

  describe('#isInteger()', function () {
    it('should return true for integers', function () {
      assert.strictEqual(validator.isInteger(4), true);
    });
    it('should return false for non-integers', function () {
      assert.strictEqual(validator.isInteger(4.5), false);
    });
  });
});
