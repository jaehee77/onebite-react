import style from './SimpleCounter.module.css';
import Controller from '@/simpleCounter/Controller';
import Viewer from '@/simpleCounter/Viewer';
import { useEffect, useRef, useState } from 'react';
import Even from '@/simpleCounter/Even';

export default function SimpleCounter() {
  const [count, setCount] = useState(0);

  const onChangeCount = (count) => {
    setCount((prevCount) => prevCount + count);
  };

  const isMount = useRef(false);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      // 마운트되지 않은 상황
      isMount.current = true;
      return;
    }
    // 위 조건으로 인해 마운트될 때에는 update 최초 실행안하고
    // 이후 업데이트 될 때에만 update 가 된다.
    // 즉, 이 코드는 순수 업데이트가 발생할 때만 실행하게 된다.
    console.log('update');
  });

  return (
    <div className={style[`simple-counter`]}>
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      {count % 2 === 0 ? <Even /> : null}
      <Controller onChangeCount={onChangeCount} />
    </div>
  );
}
