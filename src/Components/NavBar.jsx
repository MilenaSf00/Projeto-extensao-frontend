// Components/Navbar.jsx
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartPie, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'; 
import  '../NavBar.css'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/homePage" className="logoLink">PROEC</Link>
      </div>
      <ul className="list">
        <li className="item">
          <Link to="/tabela">
            <FontAwesomeIcon icon={faChartBar} /> Painel de Informações
          </Link>
        </li>
        <li className="item">
          <Link to="/grafico">
            <FontAwesomeIcon icon={faChartPie} /> Gráficos
          </Link>
        </li>
        <li className="item">
          <Link to="/">
            <FontAwesomeIcon icon={faQuestionCircle} /> Ajuda
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
