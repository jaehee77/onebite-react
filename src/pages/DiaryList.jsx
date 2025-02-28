import React, { useState } from 'react';
import Button from '../components/Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
export default function DiaryList({ data }) {
  const nav = useNavigate();

  const [sortType, setSortType] = useState('latest');

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedDate = () => {
    if (sortType === 'oldest') {
      return data.toSorted((a, b) => a.createdDate - b.createdDate);
    } else {
      return data.toSorted((a, b) => b.createdDate - a.createdDate);
    }
  };

  const sortedData = getSortedDate();
  // console.log(sortedData);

  return (
    <div className="diary-list">
      <div className="menu-bar">
        <select name="" id="" onChange={onChangeSortType}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button
          text={'새 일기 쓰기'}
          type="positive"
          onClick={() => {
            nav('/new');
          }}
        />
      </div>
      <div className="list-wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
