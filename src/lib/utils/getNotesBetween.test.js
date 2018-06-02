import getNotesBetween from './getNotesBetween';

describe('getNotesBetween()', () => {
  it('returns a single note when the start and end notes are the same', () => {
    expect(getNotesBetween('C4', 'C4')).toEqual(['C4']);
  });

  it('returns notes within an octave', () => {
    expect(getNotesBetween('C#4', 'F4')).toEqual(['C#4', 'D4', 'D#4', 'E4', 'F4']);
  });

  it('returns notes between octaves', () => {
    expect(getNotesBetween('A4', 'C#5')).toEqual(['A4', 'A#4', 'B4', 'C5', 'C#5']);
  });
});
