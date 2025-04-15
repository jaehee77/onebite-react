### 라우터 설정 예제

- Layout.jsx

```jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={`/new`}>New</Link>
        <Link to={`/diary`}>Diary</Link>
      </div>

      {/* 자식 라우트들이 여기 렌더링됨 */}
      <Outlet />
    </>
  );
}
```

- App.jsx

```jsx
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/NotFound';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';

export default function App() {
  const nav = useNavigate();

  return (
    <>
      <Routes>
        {/* 공통 레이아웃이 적용될 라우트 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary" element={<Diary />} />
        </Route>

        {/* NotFound는 레이아웃 없이 단독 렌더링 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
```
