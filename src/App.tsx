import React from 'react';

import QuillEditor from './components/QuillEditor';

import './assets/styles/App.css';

const App = () => {
  return (
    <div className='container mx-auto mt-3'>
      <div className='grid grid-cols-2 gap-x-3 '>
        <QuillEditor />

        <div className='border-[1px] border-gray-400 h-[94.9dvh]'></div>
      </div>
    </div>
  );
};

export default App;
