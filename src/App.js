import './App.css';
import Crypto from './components/Crypto';
import Onboarding from './components/Onboarding';

function App() {
  return (
    <div className="container">
      <Onboarding />
      <Crypto />
    </div>
  );
}

export default App;
