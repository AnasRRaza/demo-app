import React from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const QuillEditor: React.FC<Props> = ({ value, setValue }) => {
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
    <ReactQuill
      className='h-[60vh] overscroll-auto'
      modules={modules}
      value={value}
      onChange={setValue}
      placeholder='Start typing here...'
    />
  );
};

export default QuillEditor;
