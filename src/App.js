import Sec1 from './components/Sec1';
import Over1 from './components/SecOver1';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';

function App() {
  return (
    <div className="App">
        <div className="App_over1">
          <Over1 className='Over1'/>
          <Sec1 className='Sec1'/>
        </div>
        <Sec2/>
        <Sec3/>
    </div>
  );
}


export default App;

