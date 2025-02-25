import style from '@/todoComponentsV3/Todo.module.css';
import { memo, useContext, useState } from 'react';
import { TodoContext } from './Todo';

const TodoItem = ({ id, content, date, isDone }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
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
};

export default memo(TodoItem);
