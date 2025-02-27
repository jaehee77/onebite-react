import React from 'react';
import { getEmotionImage } from '../util/get-image';
import Button from '../components/Button';

export default function DiaryItem() {
  return (
    <div className="diary-item">
      <div className="img-section">
        <img src={getEmotionImage(1)} alt="" />
      </div>
      <div className="info-section">
        <div className="create-date">
          {new Date().toLocaleDateString()}
        </div>
        <div className="content">일기 콘텐츠</div>
      </div>
      <div className="button-section">
        <Button text={'수정하기'} />
      </div>
    </div>
  );
}
