import style from '@/todoComponentsV2/Todo.module.css';
import { useState } from 'react';

export default function TodoItem({
  id,
  content,
  date,
  isDone,
  onUpdate,
  onDelete,
}) {
  const onChangeCheckbox = (e) => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    const isConfirmed = confirm('Are you sure you want to delete?');
    if (isConfirmed) onDelete(id);
  };

  return (
    <div className={style.todo_item}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={onChangeCheckbox}
      />
      <div className={style.content}>{content}</div>
      <div className={style.date}>
        {new Date(date).toLocaleDateString()}
      </div>
      <button className={style.btn_delete} onClick={onClickDelete}>
        삭제
      </button>
    </div>
  );
}
