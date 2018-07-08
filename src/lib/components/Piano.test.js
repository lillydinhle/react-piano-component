import React from 'react';
import { mount } from 'enzyme';
import Piano from './Piano';

describe('Piano', () => {
  it('calls renderPianoKey() with the expected props', () => {
    const renderPianoKey = jest.fn();
    mount(<Piano startNote={'C1'}
      endNote={'C2'}
      renderPianoKey={renderPianoKey}
    />);

    expect(renderPianoKey.mock.calls).toMatchSnapshot();
  });

  it('renders a custom IntrumentAudio', () => {
    const CustomAudio = () => null;
    const renderPianoKey = jest.fn();

    const wrapper = mount(<Piano startNote={'C1'}
      endNote={'C2'}
      CustomAudio={CustomAudio}
      renderPianoKey={renderPianoKey}
    />);

    expect(wrapper.find(CustomAudio).exists()).toBe(true);
  });
});
