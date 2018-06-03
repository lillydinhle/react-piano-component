import isAccidentalNote from './isAccidentalNote';

describe('isAccidentalNote()', () => {
  it('returns true for sharp notes', () => {
    expect(isAccidentalNote('F#1')).toBe(true);
  });

  it('returns false for natural notes', () => {
    expect(isAccidentalNote('F1')).toBe(false);
  });

  it('returns false for unsupported notes', () => {
    expect(isAccidentalNote('F#0')).toBe(false);
  });
});
