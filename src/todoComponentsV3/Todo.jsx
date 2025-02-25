import sytle from '@/todoComponentsV3/Todo.module.css';
import Editor from '@/todoComponentsV3/Editor';
import Header from '@/todoComponentsV3/Header';
import List from '@/todoComponentsV3/List';
import { mockData } from '@/todoComponentsV3/mockData';
import {
  useCallback,
  useReducer,
  useRef,
  useState,
  createContext,
} from 'react';

export const TodoContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item,
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const [search, setSearch] = useState(''); // 검색어 상태

  const idRef = useRef(mockData.length);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId,
    });
  }, []);

  // todo 목록 삭제
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  }, []); // [] 빈배열 전달시 마운트될 때에만 한 번만 함수를 생성하고 그 다음부터 재생성 X

  // 검색어 초기화 함수
  const onClearSearch = () => {
    setSearch(''); // 검색어 초기화
  };

  return (
    <div className={sytle.todo_wrap}>
      <Header />
      <TodoContext.Provider
        value={{ todos, onCreate, onUpdate, onDelete }}
      >
        <Editor onClearSearch={onClearSearch} />
        <List search={search} setSearch={setSearch} />
      </TodoContext.Provider>
    </div>
  );
}
