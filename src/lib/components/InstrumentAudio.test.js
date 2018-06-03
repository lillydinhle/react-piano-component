import React from 'react';
import { shallow } from 'enzyme';
import { first, last } from 'lodash';
import InstrumentAudio from './InstrumentAudio';
import { mockSetInstrument, mockPlayNotes } from '../utils/InstrumentPlayer';
import INSTRUMENTS from '../constants/INSTRUMENTS';

jest.mock('../utils/InstrumentPlayer');

beforeEach(() => {
  mockSetInstrument.mockClear();
  mockPlayNotes.mockClear();
});

describe('InstrumentAudio', () => {
  it('renders as null', () => {
    const instrument = first(INSTRUMENTS);
    const wrapper = shallow(<InstrumentAudio instrument={instrument}
      notes={[]}
    />);

    expect(wrapper).toBeEmptyRender();
  });

  it('sets its initial instrument prop', () => {
    const instrument = first(INSTRUMENTS);
    shallow(<InstrumentAudio instrument={instrument}
      notes={[]}
    />);

    expect(mockSetInstrument).toHaveBeenCalledWith(instrument);
  });

  it('sets its instrument whenever its instrument prop changes', () => {
    const originalInstrument = first(INSTRUMENTS);
    const changedInstrument = last(INSTRUMENTS);
    const wrapper = shallow(<InstrumentAudio instrument={originalInstrument}
      notes={[]}
    />);

    wrapper.setProps({
      instrument: changedInstrument,
    });

    expect(mockSetInstrument).toHaveBeenLastCalledWith(changedInstrument);
  });

  it('plays its initial notes prop', () => {
    const instrument = first(INSTRUMENTS);
    const notes = ['A1', 'B1'];
    shallow(<InstrumentAudio instrument={instrument}
      notes={notes}
    />);

    expect(mockPlayNotes).toHaveBeenCalledWith(notes);
  });

  it('plays notes whenever its notes prop changes', () => {
    const instrument = first(INSTRUMENTS);
    const originalNotes = [];
    const changedNotes = ['C1'];
    const wrapper = shallow(<InstrumentAudio instrument={instrument}
      notes={originalNotes}
    />);

    wrapper.setProps({
      notes: changedNotes,
    });

    expect(mockPlayNotes).toHaveBeenLastCalledWith(changedNotes);
  });
});
