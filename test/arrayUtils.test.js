import { describe, it } from 'mocha';
import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('Array Utility Functions', () => {
  describe('findMax', () => {
    it('should return the maximum number from an array of numbers', () => {
      expect(findMax([1, 5, 3, 9, 2])).to.equal(9);
      expect(findMax([-1, -5, -3])).to.equal(-1);
      expect(findMax([0, 0, 0])).to.equal(0);
    });

    it('should handle single-element arrays', () => {
      expect(findMax([42])).to.equal(42);
      expect(findMax([-100])).to.equal(-100);
    });

    it('should throw an error when input is not an array', () => {
      expect(() => findMax('not an array')).to.throw(Error, 'Input must be an array');
      expect(() => findMax(123)).to.throw(Error, 'Input must be an array');
      expect(() => findMax({})).to.throw(Error, 'Input must be an array');
      expect(() => findMax(null)).to.throw(Error, 'Input must be an array');
      expect(() => findMax(undefined)).to.throw(Error, 'Input must be an array');
    });

    it('should handle decimal numbers', () => {
      expect(findMax([1.5, 2.7, 0.3])).to.equal(2.7);
      expect(findMax([-1.1, -2.5, -0.8])).to.equal(-0.8);
    });
  });

  describe('findMin', () => {
    it('should return the minimum number from an array of numbers', () => {
      expect(findMin([1, 5, 3, 9, 2])).to.equal(1);
      expect(findMin([-1, -5, -3])).to.equal(-5);
      expect(findMin([0, 0, 0])).to.equal(0);
    });

    it('should handle single-element arrays', () => {
      expect(findMin([42])).to.equal(42);
      expect(findMin([-100])).to.equal(-100);
    });

    it('should throw an error when input is not an array', () => {
      expect(() => findMin('not an array')).to.throw(Error, 'Input must be an array');
      expect(() => findMin(123)).to.throw(Error, 'Input must be an array');
      expect(() => findMin({})).to.throw(Error, 'Input must be an array');
      expect(() => findMin(null)).to.throw(Error, 'Input must be an array');
      expect(() => findMin(undefined)).to.throw(Error, 'Input must be an array');
    });

    it('should handle decimal numbers', () => {
      expect(findMin([1.5, 2.7, 0.3])).to.equal(0.3);
      expect(findMin([-1.1, -2.5, -0.8])).to.equal(-2.5);
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate values from an array', () => {
      expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
      expect(removeDuplicates(['a', 'b', 'a', 'c'])).to.deep.equal(['a', 'b', 'c']);
    });

    it('should return the same array when no duplicates exist', () => {
      expect(removeDuplicates([1, 2, 3])).to.deep.equal([1, 2, 3]);
      expect(removeDuplicates(['x', 'y', 'z'])).to.deep.equal(['x', 'y', 'z']);
    });

    it('should handle empty arrays', () => {
      expect(removeDuplicates([])).to.deep.equal([]);
    });

    it('should handle arrays with multiple duplicate values', () => {
      expect(removeDuplicates([1, 1, 2, 2, 3, 3, 3])).to.deep.equal([1, 2, 3]);
      expect(removeDuplicates(['a', 'a', 'a', 'b', 'b'])).to.deep.equal(['a', 'b']);
    });

    it('should preserve the order of first occurrences', () => {
      expect(removeDuplicates([3, 1, 2, 1, 3, 2])).to.deep.equal([3, 1, 2]);
    });

    it('should handle mixed data types', () => {
      expect(removeDuplicates([1, '1', 2, '2'])).to.deep.equal([1, '1', 2, '2']);
      expect(removeDuplicates([true, false, true, false])).to.deep.equal([true, false]);
    });

    it('should throw an error when input is not an array', () => {
      expect(() => removeDuplicates('not an array')).to.throw(Error, 'Input must be an array');
      expect(() => removeDuplicates(123)).to.throw(Error, 'Input must be an array');
      expect(() => removeDuplicates({})).to.throw(Error, 'Input must be an array');
      expect(() => removeDuplicates(null)).to.throw(Error, 'Input must be an array');
      expect(() => removeDuplicates(undefined)).to.throw(Error, 'Input must be an array');
    });
  });
});
