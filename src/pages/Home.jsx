// import { useSearchParams } from 'react-router-dom';

import DiaryHeader from './DiaryHeader';
import Button from '../components/Button';
import DiaryList from './DiaryList';
import { useContext, useState } from 'react';
import { DiaryStateContext } from '../DiaryApp';

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();

  return data.filter(
    (item) =>
      beginTime <= item.createdDate && item.createdDate <= endTime,
  );
};

export default function Home() {
  // const [params, setParams] = useSearchParams();
  // console.log(params.get('value'));

  const [pivotDate, setPivotDate] = useState(new Date());
  const data = useContext(DiaryStateContext);

  const monthlyData = getMonthlyData(pivotDate, data);
  // console.log(monthlyData);

  const onDecreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1),
    );
  };

  const onIncreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1),
    );
  };
  return (
    <div>
      <DiaryHeader
        title={`${pivotDate.getFullYear()}년 ${
          pivotDate.getMonth() + 1
        }월`}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
}
