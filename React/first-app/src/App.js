import logo from './logo.svg';
import './App.css';
import Car from './components/Props/Car';
import Garage from './components/Props/Garage';
import Department from './components/Props/Department';


function App() {
  return (
    <div className="App">
      
      <h1>Hello World!</h1>  
      <Car brand="Ford"/>
      <Garage />
      <Department />
    </div>
  );
}

export default App;
