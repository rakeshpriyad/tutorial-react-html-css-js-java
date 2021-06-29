import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Greetings1 from './components/greetings/Greetings';
import Car from './components/state-ex/Car';
import MyForm from './components/state-ex/forms/empForm';
import VerticalMenu from './components/menu/VerticalMenu';
import HorizontalMenu from './components/menu/HorizontalMenu';
import DropDownMenu from './components/menu/DropDownMenu';
import DropDownMegaMenu from './components/menu/DropDownMegaMenu';

function App() {
  let emp ={name: "Ketan", age: "30", address:"India"}

  let style = {
    
  }

  return (
    <div className="App">
      
      {/* <Greetings  message="Ketan" address="US" employee= {emp} /> */ }
      {/*<VerticalMenu />
      <HorizontalMenu />
      <DropDownMenu /> */}
      <DropDownMegaMenu /> 
   {/* <Car /> */}
      <MyForm />
      
    </div>
  );
}

export default App;
