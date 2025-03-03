// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import DiaryApp from './DiaryApp';

function App() {
  return (
    <>
      <BrowserRouter>
        <DiaryApp />
      </BrowserRouter>
    </>
  );
}

export default App;
