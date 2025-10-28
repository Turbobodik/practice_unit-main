import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../utils/stringUtils.js';

describe('String Utility Functions', () => {
  describe('capitalize()', () => {
    it('capitalizes the first character of a lowercase word', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('leaves already capitalized string unchanged', () => {
      expect(capitalize('Hello')).to.equal('Hello');
    });

    it('returns empty string unchanged', () => {
      expect(capitalize('')).to.equal('');
    });

    it('throws when input is not a string', () => {
      expect(() => capitalize(123)).to.throw(Error, 'Input must be a string');
      expect(() => capitalize(null)).to.throw(Error, 'Input must be a string');
      expect(() => capitalize(undefined)).to.throw(Error, 'Input must be a string');
      expect(() => capitalize({})).to.throw(Error, 'Input must be a string');
    });
  });

  describe('reverseString()', () => {
    it('reverses a simple string', () => {
      expect(reverseString('abc')).to.equal('cba');
    });

    it('handles empty and single-character strings', () => {
      expect(reverseString('')).to.equal('');
      expect(reverseString('a')).to.equal('a');
    });

    it('reverses strings with spaces and punctuation', () => {
      expect(reverseString('Hello, World!')).to.equal('!dlroW ,olleH');
    });

    it('throws when input is not a string', () => {
      expect(() => reverseString(123)).to.throw(Error, 'Input must be a string');
      expect(() => reverseString(null)).to.throw(Error, 'Input must be a string');
    });
  });

  describe('isPalindrome()', () => {
    it('returns true for simple palindromes', () => {
      expect(isPalindrome('racecar')).to.equal(true);
      expect(isPalindrome('a')).to.equal(true);
      expect(isPalindrome('')).to.equal(true);
    });

    it('is case-sensitive and strict (does not ignore spaces/punctuation)', () => {
      expect(isPalindrome('Racecar')).to.equal(false);
      expect(isPalindrome('a man a plan')).to.equal(false);
    });

    it('returns false for non-palindromes', () => {
      expect(isPalindrome('hello')).to.equal(false);
      expect(isPalindrome('ab')).to.equal(false);
    });

    it('throws when input is not a string', () => {
      expect(() => isPalindrome(123)).to.throw(Error, 'Input must be a string');
      expect(() => isPalindrome(undefined)).to.throw(Error, 'Input must be a string');
    });
  });
});