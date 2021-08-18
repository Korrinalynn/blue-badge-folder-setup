import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/day02-challenge/Votes/ParentComponent';

function App() {
  const welcomeName = "Korrina";

  const phrase = "I wasn't alive then."

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}.</h1>
      <ParentComponent phrase={phrase} />
    </div>
  );
}

export default App;