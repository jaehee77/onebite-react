import React from 'react';
import VocaHeader from './VocaHeader';
import style from './voca.module.css';
import VocaDay from './VocaDay';
import VocaList from './VocaList';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import NotFound from './NotFound';

export default function Voca() {
  return (
    <BrowserRouter>
      <div className={style.App}>
        {/* 여기에서 기본적인 컴포넌트들을 감싸고 있어야 합니다. */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <VocaHeader />
                <VocaDay />
                <VocaList defaultDay={1} />
              </>
            }
          />
          <Route
            path="/day/:day"
            element={
              <>
                <VocaHeader />
                <VocaDay />
                <VocaList />
              </>
            }
          />
          {/* 404 경로 처리 */}
          {/* 잘못된 경로로 접근했을 때 NotFound만 렌더링 */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
