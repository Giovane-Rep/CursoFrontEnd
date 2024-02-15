import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Form em React</h1>
      <MyForm userName="maria" userEmail="maria@email.com" userBio="Minha descrição" />
    </div>
  );
}

export default App;
