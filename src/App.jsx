import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
