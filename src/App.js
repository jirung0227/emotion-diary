import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RouteTest from "./components/RouteTest";
import { Diary } from "./pages/Diary";
import { Edit } from "./pages/Edit";
import { Home } from "./pages/Home";
import { New } from "./pages/New";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h2>App.js</h2>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          {/* 1. path variable - /:id */}
          <Route path='/diary/:id' element={<Diary />} />
          {/* 2. Query String - ?id=10&mode=dark */}
          <Route path='/edit' element={<Edit />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
