import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken
} from '../utils/usersListUtils.js';

describe('Users List Utilities', () => {
  const sampleUsers = [
    { id: 1, name: 'Charlie', age: 25, email: 'charlie@example.com' },
    { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
    { id: 3, name: 'bob', age: 20, email: 'bob@example.com' },
    { id: 4, name: 'Dave', age: 18, email: 'dave@example.com' }
  ];

  describe('filterUsersByAge()', () => {
    it('returns users with ages within inclusive range', () => {
      const result = filterUsersByAge(sampleUsers, 20, 30);
      expect(result.map(u => u.id)).to.deep.equal([1, 2, 3]);
    });

    it('includes users exactly on the boundary ages', () => {
      const result = filterUsersByAge(sampleUsers, 18, 18);
      expect(result).to.deep.equal([{ id: 4, name: 'Dave', age: 18, email: 'dave@example.com' }]);
    });

    it('returns empty array when no users match', () => {
      const result = filterUsersByAge(sampleUsers, 100, 200);
      expect(result).to.deep.equal([]);
    });

    it('throws when users is not an array', () => {
      expect(() => filterUsersByAge({}, 10, 20)).to.throw(Error, 'Users must be an array');
      expect(() => filterUsersByAge(null, 10, 20)).to.throw(Error, 'Users must be an array');
    });
  });

  describe('sortUsersByName()', () => {
    it('returns users sorted alphabetically by name (localeCompare)', () => {
      const result = sortUsersByName(sampleUsers);
      expect(result.map(u => u.name)).to.deep.equal(['Alice', 'bob', 'Charlie', 'Dave']);
    });

    it('does not mutate the original array order', () => {
      const originalNames = sampleUsers.map(u => u.name);
      sortUsersByName(sampleUsers);
      expect(sampleUsers.map(u => u.name)).to.deep.equal(originalNames);
    });

    it('throws when users is not an array', () => {
      expect(() => sortUsersByName('not array')).to.throw(Error, 'Users must be an array');
    });
  });

  describe('findUserById()', () => {
    it('returns the user object when found', () => {
      const user = findUserById(sampleUsers, 2);
      expect(user).to.deep.equal({ id: 2, name: 'Alice', age: 30, email: 'alice@example.com' });
    });

    it('returns null when user is not found', () => {
      const user = findUserById(sampleUsers, 999);
      expect(user).to.equal(null);
    });

    it('throws when users is not an array', () => {
      expect(() => findUserById({}, 1)).to.throw(Error, 'Users must be an array');
    });
  });

  describe('isEmailTaken()', () => {
    it('returns true when email exists in list', () => {
      expect(isEmailTaken(sampleUsers, 'alice@example.com')).to.equal(true);
    });

    it('returns false when email does not exist', () => {
      expect(isEmailTaken(sampleUsers, 'noone@example.com')).to.equal(false);
    });

    it('is case-sensitive (exact match)', () => {
      expect(isEmailTaken(sampleUsers, 'Alice@Example.com')).to.equal(false);
    });

    it('throws when users is not an array', () => {
      expect(() => isEmailTaken(null, 'a@b.c')).to.throw(Error, 'Users must be an array');
    });
  });
});