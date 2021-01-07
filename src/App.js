import './App.css';
import DataHandler from '../src/services/DataHandler';
import Load from './component/Load';
import './style.css'
import './base.min.css'
function App() {
  console.log(DataHandler.getData('users'))
  return (
    <div className="App">
      <Load>
      </Load>
    </div>
  );
}

export default App;
