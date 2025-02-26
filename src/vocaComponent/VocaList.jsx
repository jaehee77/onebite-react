import voca from './vocaData.json';
import style from './voca.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import VocaItem from './VocaItem';

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

  useEffect(() => {
    // day 값이 유효하지 않으면 NotFound 페이지로 리디렉션
    if (
      !isLoading &&
      (isNaN(dayNum) || dayNum < 1 || words.length === 0)
    ) {
      navigate('/404'); // 잘못된 경로로 접근하면 NotFound로 리디렉션
    }
  }, [isLoading, dayNum, navigate, words.length]);

  // console.log(wordList, dayNum);
  return (
    <>
      <h2>Day: {dayNum}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <VocaItem key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
}
