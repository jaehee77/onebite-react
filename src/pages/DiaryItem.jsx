import React from 'react';
import { getEmotionImage } from '../util/get-image';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
export default function DiaryItem({
  id,
  emotionId,
  content,
  createdDate,
}) {
  // const emotionId = 1;

  const nav = useNavigate();

  const onClickDetail = () => {
    nav(`/diary/${id}`);
  };

  const onClickEdit = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="diary-item">
      <div
        className={`img-section img-section-${emotionId}`}
        onClick={onClickDetail}
      >
        <img src={getEmotionImage(emotionId)} alt="" />
      </div>
      <div className="info-section" onClick={onClickDetail}>
        <div className="created-date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button-section">
        <Button text={'수정하기'} onClick={onClickEdit} />
      </div>
    </div>
  );
}
