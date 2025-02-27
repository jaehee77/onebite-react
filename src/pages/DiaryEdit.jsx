import { useParams } from 'react-router-dom';

export default function DiaryEdit() {
  const params = useParams();
  return <div>{params.id}번째 일기 수정페이지입니다.</div>;
}
