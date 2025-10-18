const Button = ({ text, color = "black" }) => {
  const onClickButton = () => {
    console.log(text);
  };
  return <button onClick={onClickButton}>{[text, color]}</button>;
};

export default Button;
