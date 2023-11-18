import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      {/* 권장 x (클릭시 페이지가 새로고침 됨. MPA의 특징) */}
      {/* <a href={"/new"}>NEW로 이동</a> */}

      {/* 페이지 역할을하는 컴포넌트를 빠르게 갈아끼워
      마치 페이지 이동하는 것 처럼 보이게 만듬. CSR의 특징 */}
      <Link to={"/"}>HOME</Link>
      <br />
      <Link to={"/diary"}>DIARY</Link>
      <br />
      <Link to={"/new"}>NEW</Link>
      <br />
      <Link to={"/edit"}>EDIT</Link>
    </>
  );
};

export default RouteTest;
