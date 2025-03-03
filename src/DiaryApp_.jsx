import './diary.css';
import { createContext, useReducer, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import DiaryDetail from './pages/DiaryDetail';
import DiaryUpdate from './pages/DiaryUpdate';
import NotFound from './pages/NotFound';
import diaryData from './pages/DiaryData';

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item,
      );
    case 'DELETE':
      return state.filter(
        (item) => String(item.id) !== String(action.id),
      );
    default:
      return state;
  }
}

export default function DiaryIndex() {
  const [data, dispatch] = useReducer(reducer, diaryData);
  const idRef = useRef(diaryData.length + 1);
  // console.log(idRef);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <div className="diary-wrap">
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<DiaryDetail />} />
            <Route path="/edit/:id" element={<DiaryUpdate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}
