import { useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

export default function CreateDay() {
  const days = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();

  const onAddDay = () => {
    fetch('http://localhost:3001/days', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ day: days.length + 1 }),
    }).then((res) => {
      if (res.ok) {
        alert(`날짜 ${days.length + 1}일째가 추가되었습니다.`);
        navigate(`/`);
      }
    });
  };
  return (
    <div>
      <h3>현재 일수: {days.length}</h3>
      <button onClick={onAddDay}>Day 추가하기</button>
    </div>
  );
}
