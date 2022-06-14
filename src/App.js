import ChartJsBox from './components/ChartJsBox/ChartJsBox'
import logo from './components/design/myLogo.png'

import './App.css';

function App() {
  return (
    <div className="App"> 
      <div className='Container'>
      <img src={logo} className='myLogo'></img>
        <ChartJsBox />
      </div>
    </div>
  );
}

export default App;
