/*import { useState, useEffect } from 'react';
import axios from 'axios';
import CampusFilter from './CampusFilter';
import SituacaoFilter from './situacaoProjects';
import AreaConhecimentoFilter from './AreaConhecimentoFilter';
import LinhaTematicaFilter from './linhaTematicaFilter';
import ModalidadeFilter from './ModalidadeFilter'; // Importa o novo filtro
import AnoFilter from './anoFilter';
import useFilteredProjects from './filterProjects';
import ExportCSVButton from './exportCsv';


const TabelaProjetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedSituacoes, setSelectedSituacoes] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedLinha, setSelectedLinha] = useState('');
  const [selectedModalidade, setSelectedModalidade] = useState([]); // Modificado para array
  const [selectedAno, setSelectedAno] = useState('');
  const [expandResumoId, setExpandResumoId] = useState(null);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get('http://localhost:3333/projetos');
        setProjetos(response.data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  // Filtra projetos 
  const filteredProjetos = useFilteredProjects(projetos, selectedCampus, selectedSituacoes, selectedAreas, selectedLinha, selectedModalidade, selectedAno);

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  const handleSituacaoChange = (situacoes) => {
    setSelectedSituacoes(situacoes);
  };

  const handleAreaChange = (areas) => {
    setSelectedAreas(areas);
  };

  const handleLinhaChange = (linha) => {
    setSelectedLinha(linha);
  };
  const handleModalidadeChange = (modalidades) => {
    console.log("Modalidades selecionadas:", modalidades);
    setSelectedModalidade(modalidades); // Verifique se é sempre um array
  };
  
  const handleAnoChange = (ano) => {
    setSelectedAno(ano);
  };

  const toggleResumo = (id) => {
    setExpandResumoId(expandResumoId === id ? null : id);
  };

  const distinctAreas = [...new Set(projetos.map(projeto => projeto.area_conhecimento))];
  const distinctLinhas = [...new Set(projetos.map(projeto => projeto.linha_tematica))];
  const distinctModalidades = [...new Set(projetos.map(projeto => projeto.modalidade))];
  
  const distinctAnos = [...new Set(projetos.flatMap(projeto => [
    new Date(projeto.dt_inicio_proj).getFullYear().toString(),
    new Date(projeto.dt_fim_proj).getFullYear().toString()
  ]))].sort((a, b) => b - a); // Ordena anos decrescente
  


  
  return (
    <div>
      <CampusFilter selectedCampus={selectedCampus} handleCampusChange={handleCampusChange} />
      <SituacaoFilter selectedSituacoes={selectedSituacoes} handleSituacaoChange={handleSituacaoChange} />
      <AreaConhecimentoFilter selectedAreas={selectedAreas} handleAreaChange={handleAreaChange} areasDeConhecimento={distinctAreas} />
      <LinhaTematicaFilter selectedLinha={selectedLinha} handleLinhaChange={handleLinhaChange} linhasTematicas={distinctLinhas} />
      <ModalidadeFilter selectedModalidade={selectedModalidade} handleModalidadeChange={handleModalidadeChange} modalidades={distinctModalidades} />
      <AnoFilter selectedAno={selectedAno} handleAnoChange={handleAnoChange} anos={distinctAnos} />

      <div>
        <h3>Total de resultados encontrados: {filteredProjetos.length}</h3>
      </div>
      
      <ExportCSVButton data={filteredProjetos} fileName="projetos.csv" />



  
      <table>
        <thead>
          <tr>
            <th>Modalidade</th>
            <th>Unidade Origem</th>
            <th>Título Projeto</th>
            <th>Área de Conhecimento</th>
            <th>Área Temática</th>
            <th>Linha Temática</th>
            <th>Coord. Projeto</th>
            <th>Email Coord.</th>
            <th>Data Início</th>
            <th>Data Fim</th>
            <th>Situação</th>
            <th>Última Alteração</th>
            <th>Palavras-chave</th>
            <th>Parcerias</th>
            <th>Resumo</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjetos.map(projeto => (
            <tr key={projeto.id_projeto}>
              <td>{projeto.modalidade}</td>
              <td>{projeto.unidade_origem}</td>
              <td>{projeto.titulo_projeto}</td>
              <td>{projeto.area_conhecimento}</td>
              <td>{projeto.area_tematica}</td>
              <td>{projeto.linha_tematica}</td>
              <td>{projeto.coord_projeto}</td>
              <td>{projeto.email_coord_projeto}</td>
              <td>{new Date(projeto.dt_inicio_proj).toLocaleDateString()}</td>
              <td>{new Date(projeto.dt_fim_proj).toLocaleDateString()}</td>
              <td>{projeto.situacao}</td>
              <td>{new Date(projeto.ult_alter_proj).toLocaleDateString()}</td>
              <td>{projeto.palavras_chave}</td>
              <td>{projeto.parcerias}</td>
              <td>
                <div>
                  {expandResumoId === projeto.id_projeto ? (
                    <p>{projeto.resumo}</p>
                  ) : (
                    <p>{projeto.resumo ? projeto.resumo.substring(0, 100) : 'Resumo indisponível'}...</p>

                  )}
                  <button onClick={() => toggleResumo(projeto.id_projeto)}>
                    {expandResumoId === projeto.id_projeto ? 'Minimizar' : 'Expandir'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProjetos;


*/




/* Ultima alteração */

/*import { useState, useEffect } from 'react';
import axios from 'axios';
import CampusFilter from './CampusFilter';
import SituacaoFilter from './situacaoProjects';
import AreaConhecimentoFilter from './AreaConhecimentoFilter';
import LinhaTematicaFilter from './LinhaTematicaFilter';
import ModalidadeFilter from './ModalidadeFilter';
import AnoFilter from './AnoFilter';
import useFilteredProjects from './filterProjects';
import ExportCSVButton from './exportCsv';
import './tabela.css'

const TabelaProjetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState([]);
  const [selectedSituacoes, setSelectedSituacoes] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedLinhas, setSelectedLinhas] = useState([]);
  const [selectedModalidade, setSelectedModalidade] = useState([]);
  const [selectedAnos, setSelectedAnos] = useState([]); // Modificado para array de anos
  const [expandResumoId, setExpandResumoId] = useState(null);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get('http://localhost:3333/projetos');
        setProjetos(response.data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  // Filtra projetos 
  const filteredProjetos = useFilteredProjects(projetos, selectedCampus, selectedSituacoes, selectedAreas, selectedLinhas, selectedModalidade, selectedAnos);



  // botão filtro
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  //botao limpar filtros
  const clearFilters = () => {
    setSelectedCampus('');
    setSelectedSituacoes([]);
    setSelectedAreas([]);
    setSelectedLinhas('');
    setSelectedModalidade([]);
    setSelectedAnos([]);
  };
  
  
  const handleCampusChange = (campus) => {
    setSelectedCampus(campus);
  };

  const handleSituacaoChange = (situacoes) => {
    setSelectedSituacoes(situacoes);
  };

  const handleAreaChange = (areas) => {
    setSelectedAreas(areas);
  };

  const handleLinhaChange = (linha) => {
    setSelectedLinhas(linha);
  };

  const handleModalidadeChange = (modalidades) => {
    setSelectedModalidade(modalidades);
  };

  const handleAnoChange = (anos) => {
    setSelectedAnos(anos);
  };

  const toggleResumo = (id) => {
    setExpandResumoId(expandResumoId === id ? null : id);
  };

  const distinctAreas = [...new Set(projetos.map(projeto => projeto.area_conhecimento))];
  const distinctLinhas = [...new Set(projetos.map(projeto => projeto.linha_tematica))];
  const distinctModalidades = [...new Set(projetos.map(projeto => projeto.modalidade))];
  const distinctAnos = [...new Set(projetos.flatMap(projeto => [
    new Date(projeto.dt_inicio_proj).getFullYear().toString(),
    new Date(projeto.dt_fim_proj).getFullYear().toString()
  ]))].sort((a, b) => b - a); // Ordena anos decrescente

  
  return (
    <div>
      {/* Container de Cabeçalho */
     /* <div className="header-container">
        <h1>Painel de Informações dos Projetos</h1>
        <p>Gerencie e visualize os projetos com facilidade usando os filtros abaixo para refinar sua pesquisa.</p>
      </div>

      <button onClick={toggleFilters}>
        {showFilters ? 'Esconder Filtros' : 'Mostrar Filtros'}
      </button>

      {showFilters && (
        <>
          <button onClick={clearFilters}>
            Limpar Filtros
          </button>
          <div className="filters-container">
            <div className="filter-item">
              <CampusFilter selectedCampus={selectedCampus} handleCampusChange={handleCampusChange} />
            </div>
            <div className="filter-item">
              <SituacaoFilter selectedSituacoes={selectedSituacoes} handleSituacaoChange={handleSituacaoChange} />
            </div>
            <div className="filter-item">
              <AreaConhecimentoFilter selectedAreas={selectedAreas} handleAreaChange={handleAreaChange} areasDeConhecimento={distinctAreas} />
            </div>
            <div className="filter-item">
              <LinhaTematicaFilter selectedLinhas={selectedLinhas} handleLinhaChange={handleLinhaChange} linhasTematicas={distinctLinhas} />
            </div>
            <div className="filter-item">
              <ModalidadeFilter selectedModalidade={selectedModalidade} handleModalidadeChange={handleModalidadeChange} modalidades={distinctModalidades} />
            </div>
            <div className="filter-item">
              <AnoFilter selectedAnos={selectedAnos} handleAnoChange={handleAnoChange} anos={distinctAnos} />
            </div>
          </div>
        </>
      )}
  <ExportCSVButton data={filteredProjetos} fileName="projetos.csv" />
      <div>
        <h3>Total de resultados encontrados: {filteredProjetos.length}</h3>
      </div>
    

      <table>
        <thead>
          <tr>
            <th>Título Projeto</th>
            <th>Modalidade</th>
            <th>Campus</th>
            
            <th>Área de Conhecimento</th>
            <th>Área Temática</th>
         
            <th>Coord. Projeto</th>
          
            <th>Data Início</th>
            <th>Data Fim</th>
            <th>Situação</th>
           <th>Ação</th>
          
        
         
          </tr>
        </thead>
        <tbody>
          {filteredProjetos.map(projeto => (
            <tr key={projeto.id_projeto}>
              <td>{projeto.titulo_projeto}</td>
              <td>{projeto.modalidade}</td>
              <td>{projeto.unidade_origem}</td>
              
              <td>{projeto.area_conhecimento}</td>
              <td>{projeto.area_tematica}</td>
            
              <td>{projeto.coord_projeto}</td>
            
              <td>{new Date(projeto.dt_inicio_proj).toLocaleDateString()}</td>
              <td>{new Date(projeto.dt_fim_proj).toLocaleDateString()}</td>
              <td>{projeto.situacao}</td>
            
             

             
<td>
  <div>
    {expandResumoId === projeto.id_projeto ? (
      <p>{projeto.resumo}</p>
    ) : (
      <p>{projeto.resumo ? projeto.resumo.substring(0, 100) : 'Resumo indisponível'}...</p>
    )}
    <button onClick={() => toggleResumo(projeto.id_projeto)}>
      {expandResumoId === projeto.id_projeto ? 'Minimizar' : 'Expandir'}
    </button>
  </div>
</td> 


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProjetos;*/




import { useState, useEffect } from 'react';
import axios from 'axios';
import CampusFilter from './CampusFilter';
import SituacaoFilter from './situacaoProjects';
import AreaConhecimentoFilter from './AreaConhecimentoFilter';
import LinhaTematicaFilter from './LinhaTematicaFilter';
import ModalidadeFilter from './ModalidadeFilter';
import AnoFilter from './AnoFilter';
import useFilteredProjects from './filterProjects';
import ExportCSVButton from './exportCsv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'; // Importa o ícone de olho para "Ver Mais"
import './tabela.css';

const TabelaProjetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState([]);
  const [selectedSituacoes, setSelectedSituacoes] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedLinhas, setSelectedLinhas] = useState([]);
  const [selectedModalidade, setSelectedModalidade] = useState([]);
  const [selectedAnos, setSelectedAnos] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProjeto, setSelectedProjeto] = useState(null); // Estado para o projeto selecionado para a modal

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get('https://projeto-extensao-backend.vercel.app/projetos');
        //const response = await axios.get('http://localhost:3333/projetos');
        setProjetos(response.data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  const filteredProjetos = useFilteredProjects(projetos, selectedCampus, selectedSituacoes, selectedAreas, selectedLinhas, selectedModalidade, selectedAnos);

  const handleCampusChange = (campus) => setSelectedCampus(campus);
  const handleSituacaoChange = (situacoes) => setSelectedSituacoes(situacoes);
  const handleAreaChange = (areas) => setSelectedAreas(areas);
  const handleLinhaChange = (linha) => setSelectedLinhas(linha);
  const handleModalidadeChange = (modalidades) => setSelectedModalidade(modalidades);
  const handleAnoChange = (anos) => setSelectedAnos(anos);

  const clearFilters = () => {
    setSelectedCampus([]);
    setSelectedSituacoes([]);
    setSelectedAreas([]);
    setSelectedLinhas([]);
    setSelectedModalidade([]);
    setSelectedAnos([]);
  };

  const distinctAreas = [...new Set(projetos.map(projeto => projeto.area_conhecimento))];
  const distinctLinhas = [...new Set(projetos.map(projeto => projeto.linha_tematica))];
  const distinctModalidades = [...new Set(projetos.map(projeto => projeto.modalidade))];
  const distinctAnos = [...new Set(projetos.flatMap(projeto => [
    new Date(projeto.dt_inicio_proj).getFullYear().toString(),
    new Date(projeto.dt_fim_proj).getFullYear().toString()
  ]))].sort((a, b) => b - a);

  const openModal = (projeto) => {
    setSelectedProjeto(projeto);
  };

  const closeModal = () => {
    setSelectedProjeto(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <div className="header-container">
        <h1>Painel de Informações dos Projetos</h1>
        <p>Gerencie e visualize os projetos com facilidade usando os filtros abaixo para refinar sua pesquisa.</p>
      </div>

      <button onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? 'Esconder Filtros' : 'Mostrar Filtros'}
      </button>

      {showFilters && (
        <>
          <button onClick={clearFilters}>
            Limpar Filtros
          </button>
          <div className="filters-container">
            <div className="filter-item">
              <CampusFilter selectedCampus={selectedCampus} handleCampusChange={handleCampusChange} />
            </div>
            <div className="filter-item">
              <SituacaoFilter selectedSituacoes={selectedSituacoes} handleSituacaoChange={handleSituacaoChange} />
            </div>
            <div className="filter-item">
              <AreaConhecimentoFilter selectedAreas={selectedAreas} handleAreaChange={handleAreaChange} areasDeConhecimento={distinctAreas} />
            </div>
            <div className="filter-item">
              <LinhaTematicaFilter selectedLinhas={selectedLinhas} handleLinhaChange={handleLinhaChange} linhasTematicas={distinctLinhas} />
            </div>
            <div className="filter-item">
              <ModalidadeFilter selectedModalidade={selectedModalidade} handleModalidadeChange={handleModalidadeChange} modalidades={distinctModalidades} />
            </div>
            <div className="filter-item">
              <AnoFilter selectedAnos={selectedAnos} handleAnoChange={handleAnoChange} anos={distinctAnos} />
            </div>
          </div>
        </>
      )}

      <ExportCSVButton data={filteredProjetos} fileName="projetos.csv" />
      <div>
        <h3>Total de resultados encontrados: {filteredProjetos.length}</h3>
      </div>

      <table>
        <thead>
          <tr>
            <th>Título Projeto</th>
            <th>Modalidade</th>
            <th>Campus</th>
            <th>Área de Conhecimento</th>
            <th>Área Temática</th>
            <th>Coord. Projeto</th>
            <th>Data Início</th>
            <th>Data Fim</th>
            <th>Situação</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjetos.map(projeto => (
            <tr key={projeto.id_projeto}>
              <td>{projeto.titulo_projeto}</td>
              <td>{projeto.modalidade}</td>
              <td>{projeto.unidade_origem}</td>
              <td>{projeto.area_conhecimento}</td>
              <td>{projeto.area_tematica}</td>
              <td>{projeto.coord_projeto}</td>
              <td>{new Date(projeto.dt_inicio_proj).toLocaleDateString()}</td>
              <td>{new Date(projeto.dt_fim_proj).toLocaleDateString()}</td>
              <td>{projeto.situacao}</td>
              <td>
                <button onClick={() => openModal(projeto)}>
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal incorporada diretamente no componente */}
      {selectedProjeto && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>X</button>
            <h2>{selectedProjeto.titulo_projeto}</h2>
            <p><strong>Unidade Origem:</strong> {selectedProjeto.unidade_origem}</p>
            <p><strong>Área de Conhecimento:</strong> {selectedProjeto.area_conhecimento}</p>
            <p><strong>Área Temática:</strong> {selectedProjeto.area_tematica}</p>
            <p><strong>Linha Temática:</strong> {selectedProjeto.linha_tematica}</p>
            <p><strong>Coord. Projeto:</strong> {selectedProjeto.coord_projeto}</p>
            <p><strong>Email Coord.:</strong> {selectedProjeto.email_coord_projeto}</p>
            <p><strong>Data Início:</strong> {new Date(selectedProjeto.dt_inicio_proj).toLocaleDateString()}</p>
            <p><strong>Data Fim:</strong> {new Date(selectedProjeto.dt_fim_proj).toLocaleDateString()}</p>
            <p><strong>Situação:</strong> {selectedProjeto.situacao}</p>
            <p><strong>Última Alteração:</strong> {new Date(selectedProjeto.ult_alter_proj).toLocaleDateString()}</p>
            <p><strong>Palavras-Chave:</strong> {selectedProjeto.palavras_chave}</p>
            <div className="modal-scroll">
              <p><strong>Resumo:</strong> {selectedProjeto.resumo}</p>
            </div>
            <p><strong>Parcerias:</strong> {selectedProjeto.parcerias}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabelaProjetos;
