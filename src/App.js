// import logo from './logo.svg';
import './App.css';
import Counter from './component/counter/counter';
import { useState } from 'react';

function App() {

  const [shhowCouter, setShowCouter] = useState(true)
  return (
    <div>
      <button onClick={() => setShowCouter(!shhowCouter)}>
        Toggle component
      </button>
      {shhowCouter && <Counter />}

    </div>
  );
}

export default App;
