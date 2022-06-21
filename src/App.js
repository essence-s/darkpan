import './App.css';
import {Navbar,Footer} from './components/layouts/index'
import Home from './views/home/Home'
import {DivSwitchTheme} from './components/common/switchTheme/SwitchTheme'

function App() {
  
  
  return (
      <div className="App blackm">
        <DivSwitchTheme data={{c1:'default',c2:'black'}}>
          <Navbar></Navbar>
          <Home></Home>
          <Footer></Footer>
          {/* <System></System> */}
        </DivSwitchTheme>
      </div>
  );
}

export default App;
