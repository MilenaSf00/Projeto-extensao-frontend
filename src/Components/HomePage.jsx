import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css'; // Certifique-se de criar este arquivo CSS

const HomePage = () => {
  return (
    <div className="landing-page">
      {/* Seção Principal */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>Projetos de Extensão</h1>
          <p>
            A Extensão Universitária é um processo interdisciplinar, educativo, cultural e científico que promove a interação transformadora entre a Universidade e a sociedade.
          </p>
          <a href="https://sites.unipampa.edu.br/proec/" target="_blank" rel="noopener noreferrer" className="cta-button">
            Saiba Mais
          </a>
        </div>
      </header>

      {/* Seção de Recursos */}
      <section className="features-section">
        <div className="feature">
          <FontAwesomeIcon icon={faChartPie} size="3x" className="icon" />
          <h3>Gráficos</h3>
          <p>Acesse gráficos dos projetos.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faFileAlt} size="3x" className="icon" />
          <h3>Relatórios</h3>
          <p>Visualize os projetos.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
