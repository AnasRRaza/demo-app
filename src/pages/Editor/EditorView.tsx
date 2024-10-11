import React, { useEffect } from 'react';

interface Props {
  value: string;
}

const EditorView: React.FC<Props> = ({ value }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    strong{
        font-weight: 900;
        color: #000;
        font-family:TWKLausanne-450;

    }
     h1 {
       font-weight: 900;
        font-size: 26px;
        overflow-wrap: break-word;
      }
      h2 {
       font-weight: 700;
        font-size: 22px;
        overflow-wrap: break-word;
      }
      h3 {
       font-weight: 700;
        font-size: 20px;
        overflow-wrap: break-word;
      }
      h4 {
       font-weight: 700;
        font-size: 18px;
        overflow-wrap: break-word;
      }
      p {
        color: #212121;
        margin-top: 8px;
        margin-bottom: 10px;
        overflow-wrap: break-word;
        }
     ol {
            padding-left: 20px;
            list-style-type: numeric;
        }
      ul {
            padding-left: 20px;
            list-style-type: disc;
        }
      li {
            color: #333333;
            overflow-wrap: break-word;
        }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div className='mt-12' dangerouslySetInnerHTML={{ __html: value }} />;
};

export default EditorView;
