import './App.css';

import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Data from './components/Data';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import PropertShowUserName from './components/PropertShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
//import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import { useState } from 'react';
import ChangeMessage from './components/ChangeMessage';

// Imagens em assets
import nomeQualquer from './assets/night.jpg';


//Renderização de lista com componente
const cars = [
  { id: 1, brand: "Ferrari", km: 0, color: "Vermelho" },
  { id: 2, brand: "Kia", km: 1000, color: "Branco" },
  { id: 3, brand: "Renault", km: 121212, color: "Amarelo" }
];

function App() {
  // Função em Property
  function showMessage () {
    console.log("Evento do componente pai");
  }

  // State lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />

      {/* Adicionando imagens*/}
      <h3>Adicionando imagem da pasta public</h3>
      <img src="/img.jpg" alt="Imagem qualquer" />
      <h3>Adicionando imagem da pasta assets</h3>
      <img src={nomeQualquer} alt="Imagem qualquer" />

      {/* Hooks - useState */}
      <h3>Hooks - useState</h3>
      <Data />

      {/* Renderização de lista */}
      <h3>Renderização de lista</h3>
      <ListRender />

      {/* Render condiocional */}
      <h3>Render condiocional</h3>
      <ConditionalRender />

      {/* Property */}
      <h3>Property</h3>
      <PropertShowUserName name="José" />

      {/* Desestruturando Property */}
      <h3>Desestruturando property</h3>
      <CarDetails brand="Fiat" km={20000} color="Branco" />

      {/* Reaproveitamento de componentes */}
      <CarDetails brand="VW" km={12} color="Preto" />
      <CarDetails brand="Audi" km={2000022112} color="Transparente" />

      {/* Renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
      ))}

      {/* Fargments */}
      <h3>Fargments</h3>
      <Fragment />

      {/* Children Property */}
      {/* <h3>Children Property</h3>
      <Container>
        <p>Alguma coisa</p>
      </Container>

      <Container>
        <h2>Mais alguma coisa</h2>
        <p>Outra coisa</p>
      </Container> */}

      {/* Função em Property */}
      <ExecuteFunction myFunction = {showMessage} />

      {/* State lift */}
      <h3>State lift</h3>
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage} />

    </div>
  );
}

export default App;
