import React from 'react';

import Header from './components/Header';
import Analysis from './pages/Analysis';
import Editor from './pages/Editor';

import './assets/styles/App.css';

const App = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 gap-x-3'>
          <Editor />
          <Analysis />
        </div>
      </div>
    </>
  );
};

export default App;
