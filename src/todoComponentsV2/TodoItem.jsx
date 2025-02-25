import style from '@/todoComponentsV2/Todo.module.css';
import { memo, useState } from 'react';

const TodoItem = ({
  id,
  content,
  date,
  isDone,
  onUpdate,
  onDelete,
}) => {
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

// 고차 컴포넌트(HOC : Higher Order Component)
// 컴포넌트에 추가적인 기능을 덧붙여서 기능이 추가된 새로운 컴포넌트를 반환하는 하는 것을 고차 컴포넌트라고 한다.

// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props 가 변경되었는지 안바뀌었는지 판단
//   // T -> Props 바뀌지 않음 => 리렌더링 X
//   // F -> Props 바뀜 => 리렌더링 O
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;

//   return true;
// });

export default memo(TodoItem);
