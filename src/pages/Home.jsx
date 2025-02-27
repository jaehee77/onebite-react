// import { useSearchParams } from 'react-router-dom';

import DiaryHeader from './DiaryHeader';
import Button from '../components/Button';
import DiaryList from './DiaryList';

export default function Home() {
  // const [params, setParams] = useSearchParams();
  // console.log(params.get('value'));

  return (
    <div>
      <DiaryHeader
        title={'2025년 2월'}
        leftChild={<Button text="<" />}
        rightChild={<Button text={'>'} />}
      />
      <DiaryList />
    </div>
  );
}
