import style from '@/todoComponentsV3/Todo.module.css';
import TodoItem from './TodoItem';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from './Todo';

export default function List({ search, setSearch }) {
  const todos = useContext(TodoStateContext);
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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('getAnalyzedData 호출!');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]); // 의존성 배열

  return (
    <div className={style.list}>
      <h3>Todo List 🌱</h3>
      <div style={{ margin: '20px 0' }}>
        <div>totalCount : {totalCount}</div>
        <div>doneCount : {doneCount}</div>
        <div>notDoneCount : {notDoneCount}</div>
      </div>
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
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}
