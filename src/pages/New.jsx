import React, { useContext, useEffect } from 'react';
import DiaryHeader from './DiaryHeader';
import Button from '../components/Button';
import DiaryEdit from './DiaryEdit';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../DiaryApp';
import { usePageTitle } from '../hooks/usePageTitle';

export default function New() {
  const nav = useNavigate();

  const { onCreate } = useContext(DiaryDispatchContext);

  usePageTitle('새 일기 쓰기');

  const onSubmit = (input) => {
    // console.log(input);
    const { createdDate, emotionId, content } = input;
    onCreate(createdDate.getTime(), emotionId, content);
    nav('/', { replace: true }); // prevent going to back
  };

  return (
    <div>
      <DiaryHeader
        title={'새 일기 쓰기'}
        leftChild={
          <Button text={'뒤로가기'} onClick={() => nav(-1)} />
        }
      />
      <DiaryEdit onSubmit={onSubmit} />
    </div>
  );
}
