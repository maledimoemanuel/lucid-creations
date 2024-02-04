import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import Services from './pages/services/Services';
import AboutUs from './pages/About/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
    </div>
  );
}

export default App;
