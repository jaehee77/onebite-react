import { useState } from 'react';
import style from './voca.module.css';

export default function VocaItem({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const onChangeCheckbox = () => {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  function onClickDelete(isDone) {
    if (confirm('Are you sure you want to delete')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }
  if (word.id === 0) return null;

  return (
    <tr
      key={word.id}
      className={`${isDone ? style.off : ''} ${
        style.tr_wrap || 'tr_wrap'
      }`.trim()}
    >
      <td>
        <input
          type="checkbox"
          checked={isDone}
          name=""
          id=""
          onChange={onChangeCheckbox}
        />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <div className={style.btn_group}>
          <button
            onClick={() => {
              setIsShow(!isShow);
            }}
            disabled={isDone}
          >
            {isShow ? '뜻 숨기기' : '뜻 보기'}
          </button>
          <button
            className={style.btn_del}
            onClick={onClickDelete}
            disabled={isDone}
          >
            삭제
          </button>
        </div>
      </td>
    </tr>
  );
}
