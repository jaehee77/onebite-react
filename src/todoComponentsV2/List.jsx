import style from '@/todoComponentsV2/Todo.module.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

export default function List({
  todos,
  onUpdate,
  search,
  setSearch,
  onDelete,
}) {
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredTodos = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };
  const filteredTodos = getFilteredTodos();

  return (
    <div className={style.list}>
      <h3>Todo List 🌱</h3>
      <div className={style.input_wrapper}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={search}
          onChange={onChangeSearch}
        />
      </div>
      <div>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
