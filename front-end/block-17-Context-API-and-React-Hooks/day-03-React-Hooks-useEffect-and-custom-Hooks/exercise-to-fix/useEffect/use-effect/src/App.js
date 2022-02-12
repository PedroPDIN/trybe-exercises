import RandomNumber from './components/RandomNumber';
import './App.css';

const App = () => {
     const { number, multi } = RandomNumber()
  return (
    <div className="App">
         <h4>{ number }</h4>
         <span>{ multi && 'Acerto' }</span>
    </div>
  );
}

export default App;
