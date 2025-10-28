import { expect } from 'chai';
import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';

describe('checkStudentKnowledge', () => {
  it('returns true for identical objects (same keys order and values)', () => {
    const student = { q1: 'a', q2: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.equal(true);
  });

  it('returns false when number of keys differ', () => {
    const student = { q1: 'a' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.equal(false);
  });

  it('returns false when keys are same but order differs', () => {
    const student = { q2: 'b', q1: 'a' }; // different order
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.equal(false);
  });

  it('returns false when a value differs', () => {
    const student = { q1: 'a', q2: 'x' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.equal(false);
  });

  it('returns true for empty objects', () => {
    expect(checkStudentKnowledge({}, {})).to.equal(true);
  });

  it('handles falsy but equal values correctly', () => {
    const student = { q1: 0, q2: false, q3: '' };
    const correct = { q1: 0, q2: false, q3: '' };
    expect(checkStudentKnowledge(student, correct)).to.equal(true);
  });

  it('throws when studentAnswers is null or undefined', () => {
    expect(() => checkStudentKnowledge(null, {})).to.throw(TypeError);
    expect(() => checkStudentKnowledge(undefined, {})).to.throw(TypeError);
  });

  it('throws when correctAnswers is null or undefined', () => {
    expect(() => checkStudentKnowledge({}, null)).to.throw(TypeError);
    expect(() => checkStudentKnowledge({}, undefined)).to.throw(TypeError);
  });
});