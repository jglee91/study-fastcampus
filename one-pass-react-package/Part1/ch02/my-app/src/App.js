import './App.css';
import Compositions from './components/2-4.Props/Compositions';
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionalComponent />
      <Extraction />
      <Compositions />
    </div>
  );
}

export default App;
