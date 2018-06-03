import { difference } from 'lodash';

export default class Instrument {
  constructor(audioPlayer) {
    this.audioPlayer = audioPlayer;
    this.activeNoteMap = {};
  }

  playNotes(activeNotes) {
    this.stopPlayingInactiveNotes(activeNotes);
    this.startPlayingNewlyActiveNotes(activeNotes);
  }

  stopPlayingInactiveNotes(activeNotes) {
    const previouslyActiveNotes = this.getActiveNotes();
    const inactiveNotes = difference(previouslyActiveNotes, activeNotes);

    inactiveNotes.forEach((note) => {
      this.activeNoteMap[note].stop();
      delete this.activeNoteMap[note];
    });
  }

  startPlayingNewlyActiveNotes(activeNotes) {
    const previouslyActiveNotes = this.getActiveNotes();
    const newlyActiveNotes = difference(activeNotes, previouslyActiveNotes);

    newlyActiveNotes.forEach((note) => {
      this.activeNoteMap[note] = this.audioPlayer.playNote(note);
    });
  }

  getActiveNotes() {
    return Object.keys(this.activeNoteMap);
  }
}
