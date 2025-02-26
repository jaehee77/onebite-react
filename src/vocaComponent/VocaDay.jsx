import voca from './vocaData.json';
import style from './voca.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';

export default function VocaDay() {
  // console.log(voca);
  // const [days, setDays] = useState([]);

  // useEffect(() => {
  //   // fetch(`http://localhost:3001/days`)
  //   //   .then((res) => res.json())
  //   //   .then((data) => setDays(data));

  //   (async function fetchDays() {
  //     try {
  //       const res = await fetch(`http://localhost:3001/days`);
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await res.json();
  //       setDays(data);
  //     } catch (err) {
  //       console.error('Fetching error: ', err);
  //       setDays([]);
  //     }
  //   })();
  // }, []);

  const days = useFetch(`http://localhost:3001/days`);

  return (
    <ul className={style.list_day}>
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
