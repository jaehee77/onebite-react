import sytle from '@/todoComponents/Todo.module.css';
import Editor from '@/todoComponents/Editor';
import Header from '@/todoComponents/Header';
import List from '@/todoComponents/List';
import { mockData } from '@/todoComponents/mockData';
import { useRef, useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState(mockData);
  const [search, setSearch] = useState(''); // 검색어 상태

  const idRef = useRef(mockData.length);
  // console.log(idRef.current);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId
          ? { ...todo, isDone: !todo.isDone }
          : todo,
      ),
    );
  };

  // 검색어 초기화 함수
  const onClearSearch = () => {
    setSearch(''); // 검색어 초기화
  };

  // todo 목록 삭제
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className={sytle.todo_wrap}>
      <Header />
      <Editor onCreate={onCreate} onClearSearch={onClearSearch} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        search={search}
        setSearch={setSearch}
        onDelete={onDelete}
      />
    </div>
  );
}
