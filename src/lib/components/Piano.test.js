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
});
