import { useNavigate, useParams } from 'react-router-dom';
import EmotionItem from './EmotionItem';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { emotionList } from '../util/constants';
import { getStringDate } from '../util/getStringedDate';

export default function DiaryEdit({ initData, onSubmit }) {
  const params = useParams();
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    // console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
    // console.log(e.target.value); // 입력된 값이 무엇인지

    let name = e.target.name;
    let value = e.target.value;
    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  // const emotionId = 3;
  return (
    <div className="diary-edit">
      <section className="date-section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          value={getStringDate(input.createdDate)}
          name="createdDate"
          id="date"
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion-section">
        <h4>오늘의 감정</h4>
        <div className="emotion-list-wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              onClick={() => {
                onChangeInput({
                  target: {
                    name: 'emotionId',
                    value: item.emotionId,
                  },
                });
              }}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content-section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          id=""
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?&#10;오늘은 감정을 작성주세요."
        ></textarea>
      </section>
      <section className="button-section">
        <Button text={'취소하기'} onClick={() => nav(-1)} />
        <Button
          text={'작성완료'}
          type={'positive'}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
}
