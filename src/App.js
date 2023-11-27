import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Diary } from "./pages/Diary";
import { Edit } from "./pages/Edit";
import { Home } from "./pages/Home";
import { New } from "./pages/New";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT":
      return action.data;

    case "CREATE":
      newState = [...action.data, ...state];
      break;
    case "REMOVE":
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    case "EDIT":
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기 1",
    date: 1700740845969,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기 2",
    date: 1700740845970,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기 3",
    date: 1700740845971,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기 4",
    date: 1700740845972,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기 5",
    date: 1700740845973,
  },
];
function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", data: targetId });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          <div className='App'>
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
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
