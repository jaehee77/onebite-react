import React, { useContext } from 'react';
import DiaryHeader from './DiaryHeader';
import Button from '../components/Button';
import DiaryEdit from './DiaryEdit';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryDispatchContext, DiaryStateContext } from '../DiaryApp';
import useDiary from '../hooks/useDiary';
import { usePageTitle } from '../hooks/usePageTitle';

export default function DiaryUpdate() {
  const params = useParams();
  const nav = useNavigate();

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  usePageTitle('일기 수정하기');

  // const currentDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    const isComfirm = confirm('Are you sure you want to delete?');
    // console.log(isComfirm);
    if (isComfirm) {
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (confirm('Are you sure you want to update?')) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <DiaryHeader
        title={'일기 수정하기'}
        leftChild={
          <Button text={'< 뒤로가기'} onClick={() => nav(-1)} />
        }
        rightChild={
          <Button
            text={'삭제하기'}
            type={'negative'}
            onClick={onClickDelete}
          />
        }
      />
      <DiaryEdit initData={useDiary(params.id)} onSubmit={onSubmit} />
    </div>
  );
}
