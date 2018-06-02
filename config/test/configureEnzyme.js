import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure enzyme to work with React 16
// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
configure({
  adapter: new Adapter(),
});
