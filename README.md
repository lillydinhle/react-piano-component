# react-piano-component
A simple and customizable react piano component  
Demo: https://lillydinhle.github.io/react-piano-component/

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

  // (Optional) Customize your audio using `renderAudio`!
  // `renderAudio(props)` is called whenever notes start or stop playing.
  renderAudio={
    ({
      notes // (Array) An array of the currently playing notes
    }) => {
      /* Play the given notes and render the audio (or return null) */
    }
  }

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

## Custom Audio

`react-piano-component` plays MP3 audio out-of-the-box, but it supports custom audio too!
To customize your audio, define a component that plays the given `notes` and pass that to `renderAudio`.

This is an example using custom audio with a [Tone.js](https://tonejs.github.io/) synthesizer
(Special thanks to @giacomorebonato!)
You can further customize the sound of the instrument by using the Tone.js [sampler](https://tonejs.github.io/examples/sampler.html).

```javascript
import React, { Component } from 'react';
import { isEqual, difference } from 'lodash';
import Tone from 'tone';

class Audio extends Component {
  constructor(props) {
    super(props);
    this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  }

  componentDidMount() {
    this.startPlayingNotes(this.props.notes);
  }

  componentDidUpdate(prevProps) {
    const notes = this.props.notes;
    const prevNotes = prevProps.notes;

    if (!isEqual(notes, prevNotes)) {
      const startedNotes = difference(notes, prevNotes);
      this.startPlayingNotes(startedNotes);

      const stoppedNotes = difference(prevNotes, notes);
      this.stopPlayingNotes(stoppedNotes);
    }
  }

  startPlayingNotes(startedNotes) {
    this.synth.triggerAttack(startedNotes);
  }

  stopPlayingNotes(stoppedNotes) {
    this.synth.triggerRelease(stoppedNotes);
  }

  render() {
    return null;
  }
}
```

And passed like this to the Piano component (with all the rest of the props).

```javascript
<Piano {...props} renderAudio={Audio} />
```

![image](https://user-images.githubusercontent.com/16672756/40879456-05a6ad4c-666e-11e8-854d-9fec442c3fcd.png)
