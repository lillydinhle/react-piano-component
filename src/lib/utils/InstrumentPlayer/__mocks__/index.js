export const mockSetInstrument = jest.fn();
export const mockPlayNotes = jest.fn();

export default jest.fn().mockImplementation(() => ({
  setInstrument: mockSetInstrument,
  playNotes: mockPlayNotes,
}));
