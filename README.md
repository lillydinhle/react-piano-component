# react-piano-component
A simple and customizable react piano component

## Installation

```shell
npm install --save react-piano-component
```

## Usage

```javascript
import Piano from 'react-piano-component';

<Piano
  // (Required) Specify a note range using `startNote` and `endNote`.
  // The following note range creates a piano with:
  // C4, C#4, D4, D#4, E4, F4, F#4, G4, G#4, A4, A#4, B4, C5
  startNote="C4"
  endNote="C5"

  // (Optional) Map keyboard keys to notes using `keyboardMap`.
  // The following `keyboardMap` maps the keyboard key `Q` to the note `C4`,
  // so whenever `Q` is pressed, `C4` plays.
  keyboardMap={{
    Q: 'C4',
  }}

  // (Required) Customize your piano keys using `renderPianoKey`!
  // `renderPianoKey(props)` is called once per note with the following props:
  renderPianoKey={
    ({
      note,               // (String) The note corresponding to the key
      isNoteAccidental,   // (Boolean) Whether the note is accidental (C#, D#, F#, G#, or A#)
      isNotePlaying,      // (Boolean) Whether the note is currently playing

      startPlayingNote,   // (Function) A function that starts playing the note
      stopPlayingNote,    // (Function) A function that stops playing the note

      keyboardShortcuts,  // (Array) Keyboard keys mapped to the note, defined by `keyboardMap`.
    }) => {
      /* Return a styled piano key */
    }
  }
/>
```

## Custom instruments

There is the possibility of passing a custom component for playing notes.
This is an example of a custom one using [ToneJS](https://tonejs.github.io/): 

```js
import { Component } from 'react';
import { isEqual } from 'lodash';
import Tone from 'tone';

export default class InstrumentAudio extends Component {
  constructor(props) {
    super(props);

    this.playNotes = this.playNotes.bind(this);
    this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  }

  componentDidMount() {
    this.playNotes();
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.notes, prevProps.notes)) {
      this.playNotes();
    }
  }

  playNotes() {
    this.synth.triggerAttackRelease(this.props.notes, 0.5);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return null;
  }
}
```

And passed like this to the Piano component (with all the rest of the props).

```js
<Piano {...props} IntrumentAudio={IntrumentAudio} />
```

## Demo
https://lillydinhle.github.io/react-piano-component/

![image](https://user-images.githubusercontent.com/16672756/40879456-05a6ad4c-666e-11e8-854d-9fec442c3fcd.png)