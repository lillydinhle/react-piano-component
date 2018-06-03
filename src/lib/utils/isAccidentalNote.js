import NOTES from '../constants/NOTES';

export default function isAccidentalNote(note) {
  return NOTES.includes(note) && note.includes('#');
}
