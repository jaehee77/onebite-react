import { useParams } from 'react-router-dom';
import EmotionItem from './EmotionItem';

const emotionList = [
  {
    emotionId: 1,
    emotionName: '완전 좋음',
  },
  {
    emotionId: 2,
    emotionName: '좋음',
  },
  {
    emotionId: 3,
    emotionName: '그럭저럭',
  },
  {
    emotionId: 4,
    emotionName: '나쁨',
  },
  {
    emotionId: 5,
    emotionName: '끔찍함',
  },
];

export default function DiaryEdit() {
  const params = useParams();

  const emotionId = 1;
  return (
    <div className="diary-edit">
      <section className="date-section">
        <h4>오늘의 날짜</h4>
        <input type="date" name="date" id="date" />
      </section>
      <section className="emotion-section">
        <h4>오늘의 감정</h4>
        <div className="emotion-list-wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content-section"></section>
      <section className="button-section"></section>
    </div>
  );
}
