import { useState } from 'react';
import './App.css';
import PerfectNumberBetween from './component/PerfectNumberBetween';
import FindPerfectNumber from './component/FindPerfectNumber';
import { ReactComponent as Change } from './assets/change.svg';

function App() {
  const [isShowing, setIsShowing] = useState<boolean>(true);

  const toggle = () => {
    setIsShowing(current => !current);
  };
  return (
    <>
        <main className="app">
          <button onClick={toggle} id="toggleBtn">
            <Change width={20} height={20} />
          </button>

          {isShowing && <PerfectNumberBetween/>} 
          {!isShowing && <FindPerfectNumber/>}
        </main>
    </>
  );
}

export default App;
