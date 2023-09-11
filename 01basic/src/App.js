import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Greets from './Components/Greet_props';
import Message_state from './Components/Message_state';
import Use_state from './Components/Use_state'

function App() {
  return (
    <div className="App">
      <Use_state/>
      {/* <Message_state/> */}

      {/* <Greet></Greet>
      <Welcome/>
      <Greets name="Bruce" superhero="Hulk" />
      <p>This is children props</p>
      <Greets name="Clark" superhero="Batman"/>
      <Greets name="Diana" superhero="Wonder Women"/> */}

    </div>
    
  );
}

export default App;
