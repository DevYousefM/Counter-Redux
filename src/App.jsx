import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const vl = useRef(0);

  return (
    <div className="App">
      <p>{count}</p>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            dispatch({ type: "In" });
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            dispatch({ type: "De" });
          }}
        >
          Decrease
        </button>
      </div>
      <input type="number" ref={vl} />
      <button
        onClick={() => {
          dispatch({ type: "Vl", payload: vl.current.value });
          vl.current.value = "";
        }}
      >
        Add Value
      </button>
    </div>
  );
}

export default App;
