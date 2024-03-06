/* eslint-disable no-unused-vars */
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

// contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contact = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Página de contato</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Contact;
