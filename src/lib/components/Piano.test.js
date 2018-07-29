import React from 'react';
import { mount } from 'enzyme';
import Piano from './Piano';

function PianoKey({ note, startPlayingNote, stopPlayingNote }) {
  return <button data-note={note}
    onMouseDown={startPlayingNote}
    onMouseUp={stopPlayingNote}
  />;
}

function startPlayingPianoKey(wrapper, note) {
  wrapper.find(`button[data-note="${note}"]`).simulate('mousedown');
}

function stopPlayingPianoKey(wrapper, note) {
  wrapper.find(`button[data-note="${note}"]`).simulate('mouseup');
}

describe('Piano', () => {
  it('calls renderPianoKey() with the expected props', () => {
    const renderPianoKey = jest.fn(PianoKey);
    mount(<Piano startNote={'C1'}
      endNote={'C2'}
      renderPianoKey={renderPianoKey}
    />);

    expect(renderPianoKey.mock.calls).toMatchSnapshot();
  });

  it('calls renderAudio() with the expected props', () => {
    const renderAudio = jest.fn(() => null);
    const wrapper = mount(
      <Piano startNote={'C1'}
        endNote={'C2'}
        renderPianoKey={PianoKey}
        renderAudio={renderAudio}
      />
    );

    startPlayingPianoKey(wrapper, 'C1');
    startPlayingPianoKey(wrapper, 'C2');
    stopPlayingPianoKey(wrapper, 'C1');

    expect(renderAudio.mock.calls).toMatchSnapshot();
  });
});
