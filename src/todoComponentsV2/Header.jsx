import style from '@/todoComponentsV2/Todo.module.css';

export default function Header() {
  return (
    <div className={style.header}>
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}
