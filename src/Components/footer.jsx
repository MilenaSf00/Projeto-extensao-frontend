// src/components/Footer.js
import './Footer.css'; // Certifique-se de criar este arquivo CSS

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Pró-Reitoria de Extensão e Cultura.</p>
        <div className="footer-links">
          <a href="https://www.unipampa.edu.br" target="_blank" rel="noopener noreferrer">UNIPAMPA</a>
          <a href="https://sites.unipampa.edu.br/proec/" target="_blank" rel="noopener noreferrer">PROEC</a>
       
        </div>
      </div>
    </footer>
  );
};

export default footer;
