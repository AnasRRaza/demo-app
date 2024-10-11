import React, { useState } from 'react';

import EditorView from './EditorView';
import QuillEditor from './QuillEditor';

const Editor = () => {
  const [value, setValue] = useState<string>('');

  return (
    <div className='min-h-[80dvh]'>
      <QuillEditor value={value} setValue={setValue} />
      <EditorView value={value} />
    </div>
  );
};

export default Editor;
