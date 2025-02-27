import voca from './vocaData.json';
import style from './voca.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import VocaItem from './VocaItem';
import useFetch from './useFetch';

export default function VocaList({ defaultDay }) {
  const [words, setWords] = useState([]);
  const { day } = useParams();
  const navigate = useNavigate();
  // const day = 1;
  const dayNum = day ? Number(day) : defaultDay;
  // console.log(dayNum);

  // const wordList = voca.words.filter(
  //   (word) => Number(word.day) === Number(dayNum),
  // );

  const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 명확히 나타내는 변수

  useEffect(() => {
    const fetchWord = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://localhost:3001/words?day=${dayNum}`,
        );
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setWords(data);
      } catch (err) {
        console.error('Fetching Error: ', err);
        setWords([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWord();
  }, [dayNum]);

  // 404 페이지로 리디렉션하기
  useEffect(() => {
    const checkDayExists = async () => {
      try {
        const res = await fetch(`http://localhost:3001/days`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const days = await res.json();

        // days 배열에서 해당 dayNum이 있는지 확인
        const isValidDay = days.some(
          (dayItem) => dayItem.day === dayNum,
        );
        if (!isValidDay) {
          // 유효하지 않은 dayNum에 대해서는 404 페이지로 리디렉션
          navigate('/404');
        }
      } catch (err) {
        console.error('Error checking day existence: ', err);
      }
    };

    checkDayExists();
  }, [dayNum, navigate]);

  return (
    <>
      <h2>Day: {dayNum}</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : words.length === 0 ? (
        <p>현재 추가된 단어가 없습니다.</p>
      ) : (
        <table>
          <tbody>
            {words.map((word) => (
              <VocaItem key={word.id} word={word} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
