import style from '@/Todo.module.css';
import TodoItem from './TodoItem';

export default function List({ todos }) {
  return (
    <div className={style.list}>
      <h3>Todo List 🌱</h3>
      <div className={style.input_wrapper}>
        <input type="text" placeholder="검색어를 입력하세요" />
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}
