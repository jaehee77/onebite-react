import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DiaryHeader from './DiaryHeader';
import Button from '../components/Button';
import Viewer from './viewer';
import useDiary from '../hooks/useDiary';
import { getStringDate } from '../util/getStringedDate';
import { usePageTitle } from '../hooks/usePageTitle';

export default function DiaryDetail() {
  const params = useParams();

  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);
  // console.log(curDiaryItem);

  usePageTitle('상세 작성 일기');

  if (!curDiaryItem) {
    return <div>Data Loading...</div>;
  }

  const { createdDate } = curDiaryItem;
  const title = getStringDate(new Date(createdDate));

  return (
    <div>
      <DiaryHeader
        title={`${title} 기록`}
        leftChild={
          <Button text={'< 뒤로가기'} onClick={() => nav(-1)} />
        }
        rightChild={
          <Button
            text={'수정하기'}
            onClick={() => nav(`/edit/${params.id}`)}
          />
        }
      />
      <Viewer {...curDiaryItem} />
    </div>
  );
}
