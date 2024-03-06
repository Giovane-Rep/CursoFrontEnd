// import { useContext } from "react";

// import { CounterContext } from "./CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

const ChangeContext = () => {
  // const { counter, setCounter } = useContext(CounterContext);

  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
};

export default ChangeContext;
