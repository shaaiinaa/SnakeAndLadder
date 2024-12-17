import { useNavigate } from "react-router-dom";
import "./homepage.css";
import Box from "./components/Box";
import { useEffect } from "react";
const Homepage = ({ setColumn, setRow, setEmoji1, setEmoji2 }) => {
  const navigate = useNavigate();
  const changeRow = (e) => {
    setRow(e.target.value);
  };
  const changeColumn = (e) => {
    let value = e.target.value;
    setColumn(value);
  };
  const changeEmoji1 = (e) => {
    setEmoji1(e.target.value);
  };
  const changeEmoji2 = (e) => {
    setEmoji2(e.target.value);
  };
  const handleClick = () => {
    navigate("/game");
  };
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <div className="box">
        <Box
          id="box1"
          name="first"
          fun1={changeRow}
          num="1"
          fun2={changeEmoji1}
        />
        <Box
          id="box2"
          name="second"
          fun1={changeColumn}
          num="2"
          fun2={changeEmoji2}
        />

        <button id="box-button" onClick={handleClick}>
          Start
        </button>
      </div>
    </>
  );
};
export default Homepage;
