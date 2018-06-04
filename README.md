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

## Demo
https://lillydinhle.github.io/react-piano-component/

![image](https://user-images.githubusercontent.com/16672756/40879456-05a6ad4c-666e-11e8-854d-9fec442c3fcd.png)