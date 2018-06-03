import React, { Component, Fragment } from 'react';
import InstrumentAudio from './InstrumentAudio';

export default class Instrument extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notesPlaying: [],
    };

    this.startPlayingNote = this.startPlayingNote.bind(this);
    this.stopPlayingNote = this.stopPlayingNote.bind(this);
  }

  startPlayingNote(note) {
    this.setState(({ notesPlaying }) => ({
      notesPlaying: [...notesPlaying, note],
    }));
  }

  stopPlayingNote(note) {
    this.setState(({ notesPlaying }) => ({
      notesPlaying: notesPlaying.filter(notePlaying => notePlaying !== note),
    }));
  }

  render() {
    const { instrument, renderInstrument } = this.props;
    const { notesPlaying } = this.state;
    return (
      <Fragment>
        {renderInstrument({
          notesPlaying,
          onPlayNoteStart: this.startPlayingNote,
          onPlayNoteEnd: this.stopPlayingNote,
        })}
        <InstrumentAudio instrument={instrument}
          notes={notesPlaying}
        />
      </Fragment>
    );
  }
}
