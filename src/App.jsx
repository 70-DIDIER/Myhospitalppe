import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';
import Home from './pages/Home';
function App() {
  

  return (
    <Router>
      <Navbar />
      <Home />
      <Footer />
      
    </Router>
  )
}

export default App;
