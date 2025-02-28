import React from 'react';
import DiaryHeader from './DiaryHeader';
import Button from '../components/Button';
import DiaryEdit from './DiaryEdit';

export default function New() {
  return (
    <div>
      <DiaryHeader
        title={'새 일기 쓰기'}
        leftChild={<Button text={'뒤로가기'} />}
      />
      <DiaryEdit />
    </div>
  );
}
