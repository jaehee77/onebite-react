import React from 'react';
import Button from '../components/Button';
import DiaryItem from './DiaryItem';

export default function DiaryList() {
  return (
    <div className="diary-list">
      <div className="menu-bar">
        <select name="" id="">
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button text={'새 일기 쓰기'} type="positive" />
      </div>
      <div className="list-wrapper">
        <DiaryItem />
      </div>
    </div>
  );
}
