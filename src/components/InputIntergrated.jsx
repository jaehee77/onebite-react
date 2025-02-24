import { useRef, useState } from 'react';

export default function InputIntergrated() {
  // const [name, setName] = useState('이름');
  // const [birth, setBirth] = useState('');
  // const [bio, setBio] = useState('');

  const [input, setInput] = useState({
    name: '',
    birth: '',
    bio: '',
  });
  const { name, birth, bio } = input;

  const countRef = useRef(0);
  const onChangeInput = (e) => {
    countRef.current++;
    console.log(`countRef.current : ${countRef.current}`);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // useRef 는 리렌더링이 필요없는 변수를 설정(사용여부에 따라 다르긴 함)하거나 돔 객체를 참조할 때 사용
  // const testRef = useRef(0);
  // console.log('Ref Rerender');

  const textRef = useRef(null);

  const onSubmit = () => {
    if (name === '') {
      textRef.current.focus();
    }
  };

  // console.log(input);
  return (
    <div>
      {/* <button
        onClick={() => {
          testRef.current++;
          console.log(testRef.current);
        }}
      >
        testRef++
      </button> */}
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={name}
          name="name"
          placeholder={'이름'}
          ref={textRef}
        />
      </div>
      <div>
        <input type="date" onChange={onChangeInput} name="birth" id="" />
        {birth}
      </div>
      <div>
        <textarea
          name="bio"
          value={bio}
          onChange={onChangeInput}
          id=""
        ></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
