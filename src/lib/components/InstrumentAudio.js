import { Component } from 'react';
import { isEqual } from 'lodash';
import InstrumentPlayer from '../utils/InstrumentPlayer';

export default class InstrumentAudio extends Component {
  constructor(props) {
    super(props);

    this.setInstrument = this.setInstrument.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  componentDidMount() {
    this.instrumentPlayer = new InstrumentPlayer();
    this.setInstrument();
    this.playNotes();
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.instrument, prevProps.instrument)) {
      this.setInstrument();
    }

    if (!isEqual(this.props.notes, prevProps.notes)) {
      this.playNotes();
    }
  }

  setInstrument() {
    this.instrumentPlayer.setInstrument(this.props.instrument);
  }

  playNotes() {
    this.instrumentPlayer.playNotes(this.props.notes);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return null;
  }
}

InstrumentAudio.defaultProps = {
  instrument: 'acoustic_grand_piano',
  notes: [],
};
