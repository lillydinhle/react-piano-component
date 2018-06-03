import getKeyboardShortcutsForNote from './getKeyboardShortcutsForNote';

describe('getKeyboardShortcutsForNote()', () => {
  it('returns an empty array if a note has no keyboard shortcuts', () => {
    const note = 'C1';
    const keyboardMap = {};
    expect(getKeyboardShortcutsForNote(keyboardMap, note)).toEqual([]);
  });

  it('returns all shortcuts if a note as multiple keyboard shortcuts', () => {
    const note = 'C1';
    const keyboardMap = {
      A: note,
      B: note,
      C: 'C2',
    };
    expect(getKeyboardShortcutsForNote(keyboardMap, note)).toEqual(['A', 'B']);
  });
});
