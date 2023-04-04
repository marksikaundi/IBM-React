function changeColor() {
  const shoot = () => {
    alert("Color Changed!");
  };
  return <button onClick={change}>Change the Color! </button>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<changeColor />);
