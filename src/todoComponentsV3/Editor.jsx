import style from '@/todoComponentsV3/Todo.module.css';
import { useContext, useRef, useState } from 'react';
import { TodoContext } from './Todo';

export default function Editor({ onClearSearch }) {
  const { onCreate } = useContext(TodoContext);
  const [content, setContent] = useState('');

  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
    // console.log(content);
  };

  const onSubmit = () => {
    if (content.trim() === '') {
      setContent('');
      contentRef.current.focus();
      return;
    }
    onCreate(content.trim());
    setContent('');
    // contentRef.current.focus();
    onClearSearch(); // Todo 추가 후 검색어 초기화
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
