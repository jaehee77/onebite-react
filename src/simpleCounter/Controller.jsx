import style from '@/SimpleCounter.module.css';

export default function Controller({ onChangeCount }) {
  const onClickHandler = (e) => {
    onChangeCount(Number(e.target.textContent));
  };

  return (
    <section className={style[`btn-group`]}>
      <button onClick={onClickHandler}>-1</button>
      <button onClick={onClickHandler}>-10</button>
      <button onClick={onClickHandler}>-100</button>
      <button onClick={onClickHandler}>+100</button>
      <button onClick={onClickHandler}>+10</button>
      <button onClick={onClickHandler}>+1</button>
    </section>
  );
}
