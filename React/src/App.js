
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListComponents from './components/ListComponent';
import RegisterLeave from './components/RegisterLeave';
function App() {
  return (
    <div>
    <Router>
    <Header />
      <div className='container'>
        
        <Routes>
<Route path="/" element={<ListComponents />} />
<Route path="/leave" element={<ListComponents />} />
  <Route path="/add-leave" element={<RegisterLeave />} />
  <Route path="/edit-leave/:id" element={<RegisterLeave />} />  
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
