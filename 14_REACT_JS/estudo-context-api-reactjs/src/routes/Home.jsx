//Alterando o valor do contexto
// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";

// refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

import ChangeContext from "../components/ChangeContext";

// contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  const { color, dispach } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispach({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeContext />

      {/* alterando contexto complexo */}

      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
