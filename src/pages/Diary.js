/**
 * 사용자 정의 훅
 * 리액트가 아닌 별도의 라이브러리가 리액트를 더 편하게 사용할 수 있도록 제공하는 훅
 */
import { useParams } from "react-router-dom";

export const Diary = () => {
  // 1. Path variable
  const { id } = useParams();
  return <div>Diary{id}</div>;
};
