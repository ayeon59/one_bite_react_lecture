const Main = () => {
  const user = {
    name: "안넝",
    isLogin: -1,
  };

  return <>{user.isLogin ? <div>로그인</div> : <div>로그아웃</div>}</>;
};

export default Main;
