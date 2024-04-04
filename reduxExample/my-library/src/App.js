import logo from './logo.svg';
import './App.css';
import BookPage from './component/Book/Book Page/BookPage';
import StudentPage from './component/Student/StudentPage/StudentPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   <>
    <BrowserRouter basename = "/">
      <Routes>
        <Route path="/" element = {<StudentPage/>} />
        <Route path="/book" element = {<BookPage/>} />
      </Routes>

    </BrowserRouter>
    
    
   </>
  );
}

export default App;
