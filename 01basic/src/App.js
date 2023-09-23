import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Greets from './Components/Greet_props';
import Message_state from './Components/Message_state';
import ClassCounter from './Components/ClassCounter'
import HookCounterOne from './Components/HookCounterOne'
import ParentComponent from './Components/ParentComponent';
import Counter from './Components/Counter';
import RFragment from './Components/RFragment';
import Controlled from './Components/Contorlled';
import Uncontrolled from './Components/Uncontrolled';
import{Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import LifecycleA from './Components/LifecycleA';
import LifecycleB from './Components/LifecycleB.js';

function App() {
  return (
    <div className="App">
      {/* <Uncontrolled/> */}
      {/* <Controlled/> */}
      {/* <RFragment/> */}
      {/* <Counter /> */}
      {/* <ClassCounter/> */}
      {/* <ParentComponent /> */}
      {/* <HookCounterOne/> */}
      {/* <Message_state/> */}

      {/* <Greet></Greet>
      <Welcome/>
      <Greets name="Bruce" superhero="Hulk" />
      <p>This is children props</p>
      <Greets name="Clark" superhero="Batman"/>
      <Greets name="Diana" superhero="Wonder Women"/> */}

    {/* <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
    </Routes> */}

       <LifecycleA/>
        
  
    </div>
    
  );
}

export default App;
