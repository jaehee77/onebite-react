import { useState } from 'react';
// 커스텀 훅 생성(use 를 접두어로 붙이면 커스텀 훅이 된다.)

export default function useInput() {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  return [input, onChange];
}
