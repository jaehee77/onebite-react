import sytle from '@/Todo.module.css';
import Editor from './todoComponents/Editor';
import Header from './todoComponents/Header';
import List from './todoComponents/List';
import { mockData } from '@/todoComponents/mockData';
import { useRef, useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState(mockData);

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

  return (
    <div className={sytle.todo_wrap}>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}
