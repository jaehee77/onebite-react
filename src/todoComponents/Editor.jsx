import style from '@/Todo.module.css';
import { useRef, useState } from 'react';

export default function Editor({ onCreate }) {
  const [content, setContent] = useState('');

  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content.trim() === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content.trim());
    setContent('');
    // contentRef.current.focus();
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className={style.editor}>
      <input
        type="text"
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
        ref={contentRef}
        onKeyDown={onKeydown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
