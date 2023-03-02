import { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";

export const UserCount = createContext();

const initialState = {
  count: 2,
};

const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Learn useContext</h1>
      <h2>カウント: {state.count}</h2>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("RESET")}>0</button>
      <p>以下useContext </p>
      <UserCount.Provider value={state.count}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
}

export default App;
