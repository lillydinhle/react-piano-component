import { NOTES } from './index';

describe('react-piano-component', () => {
  it('exports an ordered array of supported notes', () => {
    expect(NOTES).toMatchSnapshot();
  });
});
