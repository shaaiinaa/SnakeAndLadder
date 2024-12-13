import Options from "./option";

const Box = ({ name, fun1, num, fun2 }) => {
  return (
    <div className="homepage-input">
      <label className="label">Enter Name Of {name} Player</label>
      <input
        type="text"
        placeholder={`name of player ${num}`}
        className="input"
        onChange={fun1}
      />
      <label className="homepage-label" for="emojis">
        Choose avatar
      </label>

      <select onChange={fun2} className="homepage-select" id="emojis">
        <Options />
      </select>
    </div>
  );
};

export default Box;
