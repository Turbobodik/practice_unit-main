import { describe, it } from 'mocha';
import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('Math Utility Functions', () => {
  describe('add()', () => {
    it('adds two positive integers', () => {
      expect(add(1, 2)).to.equal(3);
      expect(add(10, 15)).to.equal(25);
    });

    it('adds negative numbers', () => {
      expect(add(-1, -2)).to.equal(-3);
      expect(add(-5, 2)).to.equal(-3);
    });

    it('adds decimal numbers (precise examples)', () => {
      // Use decimal pairs that are represented cleanly
      expect(add(1.5, 2.5)).to.equal(4.0);
      expect(add(-1.25, 0.25)).to.equal(-1.0);
    });

    it('adding zero returns the same number and is commutative', () => {
      expect(add(7, 0)).to.equal(7);
      expect(add(0, 7)).to.equal(7);
      expect(add(3, 4)).to.equal(add(4, 3));
    });

    it('handles large numbers', () => {
      expect(add(1e12, 1e12)).to.equal(2e12);
    });
  });

  describe('subtract()', () => {
    it('subtracts smaller from larger to produce positive result', () => {
      expect(subtract(10, 3)).to.equal(7);
    });

    it('subtracts larger from smaller to produce negative result', () => {
      expect(subtract(3, 10)).to.equal(-7);
    });

    it('subtracting zero returns the same number', () => {
      expect(subtract(5, 0)).to.equal(5);
      expect(subtract(0, 5)).to.equal(-5);
    });

    it('subtracts decimal numbers', () => {
      expect(subtract(2.5, 1.25)).to.equal(1.25);
      expect(subtract(-1.5, -0.5)).to.equal(-1.0);
    });
  });

  describe('multiply()', () => {
    it('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).to.equal(12);
      expect(multiply(7, 6)).to.equal(42);
    });

    it('multiplying by zero yields zero', () => {
      expect(multiply(5, 0)).to.equal(0);
      expect(multiply(0, 5)).to.equal(0);
    });

    it('handles negative multiplicands', () => {
      expect(multiply(-3, 4)).to.equal(-12);
      expect(multiply(-3, -4)).to.equal(12);
    });

    it('multiplies decimal numbers', () => {
      expect(multiply(1.5, 2)).to.equal(3.0);
      expect(multiply(2.5, 0.4)).to.equal(1.0);
    });

    it('is commutative', () => {
      expect(multiply(8, 9)).to.equal(multiply(9, 8));
    });
  });

  describe('divide()', () => {
    it('divides two positive numbers', () => {
      expect(divide(10, 2)).to.equal(5);
      expect(divide(9, 3)).to.equal(3);
    });

    it('divides decimal numbers', () => {
      expect(divide(5, 2)).to.equal(2.5);
      expect(divide(2.5, 0.5)).to.equal(5);
    });

    it('handles negative values correctly', () => {
      expect(divide(-10, 2)).to.equal(-5);
      expect(divide(10, -2)).to.equal(-5);
      expect(divide(-10, -2)).to.equal(5);
    });

    it('dividing by 1 or -1 returns same or negated value', () => {
      expect(divide(7, 1)).to.equal(7);
      expect(divide(7, -1)).to.equal(-7);
    });

    it('throws an Error when dividing by zero with the expected message', () => {
      expect(() => divide(5, 0)).to.throw(Error, 'Cannot divide by zero');
      expect(() => divide(0, 0)).to.throw(Error, 'Cannot divide by zero');
    });

    it('handles large numbers', () => {
      expect(divide(1e12, 1e6)).to.equal(1e6);
    });
  });
});
