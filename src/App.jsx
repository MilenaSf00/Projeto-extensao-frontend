// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Tabela from './Components/Tabela';
import HomePage from './Components/HomePage'; // Importe o componente HomePage
import Footer from './Components/footer'; 
import './App.css';
import Grafico from './Components/Grafico';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/homePage" element={<HomePage />} /> {/* Rota para a Página Inicial */}
          <Route path="/tabela" element={<Tabela />} /> {/* Rota para a Tabela */}
          <Route path="/grafico" element={<Grafico/>} /> {/* Rota para a Tabela */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
