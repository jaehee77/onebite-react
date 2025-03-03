import React from 'react';
import { getEmotionImage } from '../util/get-image';
import { emotionList } from '../util/constants';

export default function Viewer({ emotionId, content }) {
  // const emotionId = 3;

  // console.log(emotionId, content);

  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId),
  );

  return (
    <div className="viewer">
      <section className="img-section">
        <h4>오늘의 감정</h4>
        <div
          className={`img-emotion-wrap img-emotion-wrap-${emotionId}`}
        >
          <img src={getEmotionImage(emotionId)} alt="" />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content-section">
        <h4>오늘의 일기</h4>
        <div className="content-wrap">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
}
