import React, { Fragment } from 'react';
import Instrument from './Instrument';
import isAccidentalNote from '../utils/isAccidentalNote';
import getNotesBetween from '../utils/getNotesBetween';

export default function Piano({
  startNote, endNote, keyboardMap, renderPianoKey,
}) {
  const notes = getNotesBetween(startNote, endNote);

  return (
    <Instrument
      instrument={'acoustic_grand_piano'}
      keyboardMap={keyboardMap}
      renderInstrument={({ notesPlaying, onPlayNoteStart, onPlayNoteEnd }) =>
        notes.map(note => (
          <Fragment key={note}>
            {renderPianoKey({
              note,
              isNoteAccidental: isAccidentalNote(note),
              isNotePlaying: notesPlaying.includes(note),
              startPlayingNote: () => onPlayNoteStart(note),
              stopPlayingNote: () => onPlayNoteEnd(note),
            })}
          </Fragment>
        ))
      }
    />
  );
}
