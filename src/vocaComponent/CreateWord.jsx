import { useRef, useState } from 'react';
import useFetch from './useFetch';
import style from './voca.module.css';
import {
  unstable_HistoryRouter,
  useNavigate,
} from 'react-router-dom';

export default function CreateWord() {
  const days = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const enRef = useRef(null);
  const koRef = useRef(null);
  const dayRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      const eng = enRef.current.value;
      const kor = koRef.current.value;
      const day = dayRef.current.value;

      fetch('http://localhost:3001/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eng,
          kor,
          day: Number(day),
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert('저장이 완료되었습니다.');
          navigate(`/day/${day}`);
        }
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={style.input_area}>
        <label htmlFor="en">Eng</label>
        <input
          type="text"
          id="en"
          ref={enRef}
          placeholder="Computer"
        />
      </div>
      <div className={style.input_area}>
        <label htmlFor="kr">Kor</label>
        <input type="text" id="kr" ref={koRef} placeholder="컴퓨터" />
      </div>
      <div className={style.input_area}>
        <label htmlFor="day">Day</label>
        <select name="" id="day" ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>{isLoading ? 'Saving...' : '저장'}</button>
    </form>
  );
}
