const emojis1 = ["🐼", "👧🏻", "🎅🏻", "💀", "🤖", "🐵", "👦🏻", "🐶"];
const Options = () => {
  return emojis1.map((em) => <option value={em}>{em}</option>);
};
export default Options;
