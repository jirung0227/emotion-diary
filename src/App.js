import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
import { Diary } from "./pages/Diary";
import { Edit } from "./pages/Edit";
import { Home } from "./pages/Home";
import { New } from "./pages/New";

function App() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  return (
    <BrowserRouter>
      <div className='App'>
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text={"왼쪽 버튼"} onClick={() => alert("왼쪽 클릭")} />
          }
          rightChild={
            <MyButton
              text={"오른쪽 버튼"}
              onClick={() => alert("오른쪽 클릭")}
            />
          }
        />
        <MyButton text={"버튼"} onClick={() => alert("aa")} type={"positive"} />
        <MyButton text={"버튼"} onClick={() => alert("aa")} type={"negative"} />

        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          {/* 1. path variable - /:id */}
          <Route path='/diary/:id' element={<Diary />} />
          {/* 2. Query String - ?id=10&mode=dark */}
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
