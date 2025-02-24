// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 될 수는 없다.(if문, for문 등에서 불가.. 호출 순서가 꼬이면 관리 안됨)
// 3. 나만의 훅(custom hook) 직접 만들 수 있다.

import useInput from '@/hooks/useInput';

// 커스텀 훅 생성(use 를 접두어로 붙이면 커스텀 훅이 된다.)
/*
function useInput() {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  return [input, onChange];
}
*/

export default function HookExample() {
  // 커스텀 훅 호출
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <>
      <div>
        <input type="text" value={input} onChange={onChange} />
      </div>
      <div>
        <input type="text" value={input2} onChange={onChange2} />
      </div>
    </>
  );
}
