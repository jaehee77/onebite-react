import React from 'react';
import { getEmotionImage } from '../util/get-image';

export default function EmotionItem({
  emotionId,
  emotionName,
  isSelected,
}) {
  return (
    <div
      className={`emotion-item ${
        isSelected ? `emotion-on-${emotionId}` : ''
      }`.trim()}
    >
      <img
        className="emotion-img"
        src={getEmotionImage(emotionId)}
        alt={`${emotionName}`}
      />
      <div className="emotion-name">{emotionName}</div>
    </div>
  );
}
