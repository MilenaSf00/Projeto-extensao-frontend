/*import { useState, useEffect } from 'react';

const useFilteredProjects = (projetos, selectedCampus, selectedSituacoes, selectedAreas, selectedLinha, selectedModalidade, selectedAno) => {
  const [filteredProjetos, setFilteredProjetos] = useState([]);

  useEffect(() => {
    let filtered = projetos;

    if (selectedCampus) {
      filtered = filtered.filter(projeto => projeto.unidade_origem === selectedCampus);
    }

    if (selectedSituacoes.length > 0) {
      filtered = filtered.filter(projeto => selectedSituacoes.includes(projeto.situacao));
    }

    if (selectedAreas.length > 0) {
      filtered = filtered.filter(projeto => selectedAreas.includes(projeto.area_conhecimento));
    }

    if (selectedLinha) {
      filtered = filtered.filter(projeto => projeto.linha_tematica === selectedLinha);
    }

    if (selectedModalidade.length > 0) { 
      filtered = filtered.filter(projeto => selectedModalidade.includes(projeto.modalidade));
    }

    if (selectedAno) {
      const ano = parseInt(selectedAno, 10);
      const inicioAnoFiltro = new Date(`${ano}-01-01`);
      const fimAnoFiltro = new Date(`${ano}-12-31`);
      
      filtered = filtered.filter(projeto => {
        const dtInicioProj = new Date(projeto.dt_inicio_proj);
        const dtFimProj = new Date(projeto.dt_fim_proj);
        // Verifica se o projeto está ativo dentro do ano selecionado
        return dtInicioProj <= fimAnoFiltro && dtFimProj >= inicioAnoFiltro;
      });
    }

    setFilteredProjetos(filtered);
  }, [projetos, selectedCampus, selectedSituacoes, selectedAreas, selectedLinha, selectedModalidade, selectedAno]);

  return filteredProjetos;
};

export default useFilteredProjects;
*/


/*import { useState, useEffect } from 'react';

const useFilteredProjects = (projetos, selectedCampus, selectedSituacoes, selectedAreas, selectedLinha, selectedModalidade, selectedAnos) => {
  const [filteredProjetos, setFilteredProjetos] = useState([]);

  useEffect(() => {
    let filtered = projetos;

    if (selectedCampus) {
      filtered = filtered.filter(projeto => projeto.unidade_origem === selectedCampus);
    }

    if (selectedSituacoes.length > 0) {
      filtered = filtered.filter(projeto => selectedSituacoes.includes(projeto.situacao));
    }

    if (selectedAreas.length > 0) {
      filtered = filtered.filter(projeto => selectedAreas.includes(projeto.area_conhecimento));
    }

    if (selectedLinha) {
      filtered = filtered.filter(projeto => projeto.linha_tematica === selectedLinha);
    }

    if (selectedModalidade.length > 0) { 
      filtered = filtered.filter(projeto => selectedModalidade.includes(projeto.modalidade));
    }

    if (selectedAnos.length > 0) {
      const anoFiltro = selectedAnos.map(ano => ({
        inicioAno: new Date(`${ano}-01-01`),
        fimAno: new Date(`${ano}-12-31`),
      }));

      filtered = filtered.filter(projeto => {
        const dtInicioProj = new Date(projeto.dt_inicio_proj);
        const dtFimProj = new Date(projeto.dt_fim_proj);

        return anoFiltro.some(({ inicioAno, fimAno }) => {
          return (dtInicioProj <= fimAno && dtFimProj >= inicioAno);
        });
      });
    }

    setFilteredProjetos(filtered);
  }, [projetos, selectedCampus, selectedSituacoes, selectedAreas, selectedLinha, selectedModalidade, selectedAnos]);

  return filteredProjetos;
};

export default useFilteredProjects;  ultimo*/

import { useState, useEffect } from 'react';

const useFilteredProjects = (projetos, selectedCampus, selectedSituacoes, selectedAreas, selectedLinhas, selectedModalidade, selectedAnos) => {
  const [filteredProjetos, setFilteredProjetos] = useState([]);

  useEffect(() => {
    let filtered = projetos;

    if (selectedCampus.length > 0) {
      filtered = filtered.filter(projeto => selectedCampus.includes(projeto.unidade_origem));
    }

    if (selectedSituacoes.length > 0) {
      filtered = filtered.filter(projeto => selectedSituacoes.includes(projeto.situacao));
    }

    if (selectedAreas.length > 0) {
      filtered = filtered.filter(projeto => selectedAreas.includes(projeto.area_conhecimento));
    }

    if (selectedLinhas.length > 0) {
      filtered = filtered.filter(projeto => selectedLinhas.includes(projeto.linha_tematica));
    }

    if (selectedModalidade.length > 0) { 
      filtered = filtered.filter(projeto => selectedModalidade.includes(projeto.modalidade));
    }

    if (selectedAnos.length > 0) {
      const anoFiltro = selectedAnos.map(ano => ({
        inicioAno: new Date(`${ano}-01-01`),
        fimAno: new Date(`${ano}-12-31`),
      }));

      filtered = filtered.filter(projeto => {
        const dtInicioProj = new Date(projeto.dt_inicio_proj);
        const dtFimProj = new Date(projeto.dt_fim_proj);

        return anoFiltro.some(({ inicioAno, fimAno }) => {
          return (dtInicioProj <= fimAno && dtFimProj >= inicioAno);
        });
      });
    }

    setFilteredProjetos(filtered);
  }, [projetos, selectedCampus, selectedSituacoes, selectedAreas, selectedLinhas, selectedModalidade, selectedAnos]);

  return filteredProjetos;
};

export default useFilteredProjects;
