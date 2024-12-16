import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faFileAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css'; // Certifique-se de criar este arquivo CSS

const HomePage = () => {
  return (
    <div className="landing-page">
      <div className="left-section">
        <h1>Acesso facilitado a dados e resultados da extensão universitária</h1>
        <p className="description">
          A Extensão Universitária, sob o princípio constitucional da indissociabilidade entre ensino, pesquisa e extensão, é um processo interdisciplinar, educativo, cultural, científico e político que promove a interação transformadora entre Universidade e outros setores da sociedade.
        </p>
      </div>
      <div className="right-section">
        <div className="icon-container">
          <FontAwesomeIcon icon={faChartPie} size="4x" className="icon graph-icon" />
          <span className="icon-label">Gráfico</span>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faFileAlt} size="4x" className="icon report-icon" />
          <span className="icon-label">Relatório</span>
        </div>
        <a href="https://sites.unipampa.edu.br/proec/" target="_blank" rel="noopener noreferrer" className="proec-link">
          Para mais Informações <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /> Proec
        </a>
      </div>
    </div>
  );
};

export default HomePage;
