import style from '@/Todo.module.css';
import { useState } from 'react';

export default function TodoItem({ content, date, isDone }) {
  const [check, setCheck] = useState(isDone);
  const onChangeCheck = (e) => {
    setCheck((prevCheck) => !prevCheck);
  };

  return (
    <div className={style.todo_item}>
      <input
        type="checkbox"
        name=""
        id=""
        checked={check}
        onChange={onChangeCheck}
      />
      <div className={style.content}>{content}</div>
      <div className={style.date}>{date}</div>
      <button className={style.btn_delete}>삭제</button>
    </div>
  );
}
