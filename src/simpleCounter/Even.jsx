import { useEffect } from 'react';

export default function Even() {
  useEffect(() => {
    // 클린업, 정리함수
    // unmount 가 될때 실행된다.
    return () => {
      console.log('unmount...');
    };
  }, []);
  return <div>짝수입니다.</div>;
}
