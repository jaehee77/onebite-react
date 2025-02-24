import style from '@/SimpleCounter.module.css';

export default function Viewer({ count }) {
  return (
    <section>
      <div className={style[`count-text`]}>현재 카운트</div>
      <div className={style.number}>{count}</div>
    </section>
  );
}
