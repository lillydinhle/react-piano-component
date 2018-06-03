import AudioPlayer from './AudioPlayer';
import Instrument from './Instrument';

export default class InstrumentPlayer {
  constructor() {
    this.audioPlayer = new AudioPlayer();
    this.instrument = new Instrument(this.audioPlayer);
  }

  setInstrument(instrumentName) {
    this.audioPlayer.setInstrument(instrumentName);
  }

  playNotes(notes) {
    this.instrument.playNotes(notes);
  }
}
