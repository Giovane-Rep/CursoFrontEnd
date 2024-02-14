import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>CSS no React</h1>

      {/* CSS de componente */}
      <MyComponent />

      {/* inline style */}
      <p style={{ color: "blue", padding: "25px" }}>
        Este elemento tem estilos inline
      </p>

      {/* Classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título terá uma classe
      </h2>

      {/* CSS modules */}
      <Title />
    </div>
  );
}

export default App;
