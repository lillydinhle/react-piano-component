import React from 'react';
import InteractivePiano from './components/InteractivePiano';
import MadeWithLoveTag from './components/MadeWithLoveTag';
import './App.css';

const App = () => (
  <div className={'app__fullscreen-container'}>
    <div className={'app__body'}>
      <InteractivePiano />
    </div>
    <div className={'app__made-with-love-tag'}>
      <MadeWithLoveTag
        className={'app__made-with-love-tag'}
        author={'lillydinhle'}
        link={'https://github.com/lillydinhle'}
      />
    </div>
  </div>
);

export default App;
