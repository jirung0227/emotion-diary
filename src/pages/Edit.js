import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Edit = () => {
  // 2. Query String
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  // 3. Page Moving  페이지 이동 함수 반환
  const navigate = useNavigate();

  return (
    <div>
      Edit {id}
      <button
        onClick={() =>
          setSearchParams({
            who: "jj",
          })
        }
      >
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};
