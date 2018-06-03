import React from 'react';
import Piano from '../../lib';
import './InteractivePiano.css';

function PianoContainer({ children }) {
  return (
    <div
      className={'interactive-piano__piano-container'}
      onMouseDown={event => event.preventDefault()}
    >
      {children}
    </div>
  );
}

function AccidentalKey({ isPlaying, text, eventHandlers }) {
  return (
    <div className={'interactive-piano__accidental-key__wrapper'}>
      <button
        className={`interactive-piano__accidental-key ${
          isPlaying ? 'interactive-piano__accidental-key--playing' : ''
        }`}
        {...eventHandlers}
      >
        <div className={'interactive-piano__text'}>{text}</div>
      </button>
    </div>
  );
}

function NaturalKey({ isPlaying, text, eventHandlers }) {
  return (
    <button
      className={`interactive-piano__natural-key ${
        isPlaying ? 'interactive-piano__natural-key--playing' : ''
      }`}
      {...eventHandlers}
    >
      <div className={'interactive-piano__text'}>{text}</div>
    </button>
  );
}

function PianoKey({
  isNoteAccidental,
  isNotePlaying,
  startPlayingNote,
  stopPlayingNote,
  keyboardShortcuts,
}) {
  function handleMouseEnter(event) {
    if (event.buttons) {
      startPlayingNote();
    }
  }

  const KeyComponent = isNoteAccidental ? AccidentalKey : NaturalKey;
  const eventHandlers = {
    onMouseDown: startPlayingNote,
    onMouseEnter: handleMouseEnter,
    onTouchStart: startPlayingNote,
    onMouseUp: stopPlayingNote,
    onMouseOut: stopPlayingNote,
    onTouchEnd: stopPlayingNote,
  };
  return (
    <KeyComponent
      isPlaying={isNotePlaying}
      text={keyboardShortcuts.join(' / ')}
      eventHandlers={eventHandlers}
    />
  );
}

export default function InteractivePiano() {
  return (
    <PianoContainer>
      <Piano
        startNote={'C4'}
        endNote={'B5'}
        renderPianoKey={PianoKey}
        keyboardMap={{
          Q: 'C4',
          2: 'C#4',
          W: 'D4',
          3: 'D#4',
          E: 'E4',
          R: 'F4',
          5: 'F#4',
          T: 'G4',
          6: 'G#4',
          Y: 'A4',
          7: 'A#4',
          U: 'B4',
          V: 'C5',
          G: 'C#5',
          B: 'D5',
          H: 'D#5',
          N: 'E5',
          M: 'F5',
          K: 'F#5',
          ',': 'G5',
          L: 'G#5',
          '.': 'A5',
          ';': 'A#5',
          '/': 'B5',
        }}
      />
    </PianoContainer>
  );
}
