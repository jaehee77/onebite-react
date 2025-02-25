import { useReducer } from 'react';

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
// 함수 이름은 커스텀 가능
function reducer(state, action) {
  // console.log(state, action);

  switch (action.type) {
    case 'INCREASE':
      if (state >= 10) {
        return state;
      }
      return state + action.data;
    case 'DECREASE':
      if (state <= 0) {
        return state;
      }
      return state - action.data;
    default:
      return state;
  }
}

export default function ReducerExamle() {
  // dispatch: 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0); // 함수, 초기값 전달

  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지 작성
    // -> 인수로 전달된 객체({})를 액션 객체라 함
    dispatch({
      type: 'INCREASE',
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: 'DECREASE',
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}
