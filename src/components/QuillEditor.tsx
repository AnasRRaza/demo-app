'use client';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const QuillEditor: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ align: ['right', 'center', 'justify'] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
    ],
  };

  return (
    <div className='h-[90dvh]'>
      <ReactQuill
        className='h-full'
        modules={modules}
        value={value}
        onChange={setValue}
        placeholder='Start typing here...'
      />
    </div>
  );
};

export default QuillEditor;
