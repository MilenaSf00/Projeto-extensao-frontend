import { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';
import axios from 'axios';
import './Grafico.css';
import AnoFilter from './anoFilter';  // Importa o filtro de Ano
import CampusFilter from './campusFilter';  // Importa o filtro de Campus
import useFilteredProjects from './filterProjects'; // Importa o hook para filtrar projetos

// Registrar os componentes necessários do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const Grafico = () => {
  const [dataModalidades, setDataModalidades] = useState({ labels: [], datasets: [] });
  const [dataAreasConhecimento, setDataAreasConhecimento] = useState({ labels: [], datasets: [] });
  const [dataAreaTematica, setDataAreaTematica] = useState({ labels: [], datasets: [] });
  const [dataSituacao, setDataSituacao] = useState({ labels: [], datasets: [] });  // State for Situação
  const [loading, setLoading] = useState(true);
  const [selectedAnos, setSelectedAnos] = useState([]);  // Filtro de Ano
  const [selectedCampus, setSelectedCampus] = useState([]);  // Filtro de Campus

  const [projetos, setProjetos] = useState([]); // Todos os projetos
  const filteredProjetos = useFilteredProjects(projetos, selectedCampus, [], [], [], [], selectedAnos);  // Filtra os projetos com o hook

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get('https://projeto-extensao-backend.vercel.app/projetos');
        setProjetos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
        setLoading(false);
      }
    };

    fetchProjetos();
  }, []);

  useEffect(() => {
    if (filteredProjetos.length === 0) return; // Se não houver projetos filtrados, não faz nada

    // Agrupar dados por modalidade
    const modalidades = filteredProjetos.reduce((acc, projeto) => {
      if (projeto.modalidade) {
        acc[projeto.modalidade] = (acc[projeto.modalidade] || 0) + 1;
      }
      return acc;
    }, {});

    // Preparar dados para o gráfico de pizza (modalidades)
    const labelsModalidades = Object.keys(modalidades);
    const dataValuesModalidades = Object.values(modalidades);

    setDataModalidades({
      labels: labelsModalidades,
      datasets: [
        {
          label: 'Projetos de Extensão por Modalidade',
          data: dataValuesModalidades,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
          ],
          borderColor: '#fff',
          borderWidth: 1,
        },
      ],
    });

    // Agrupar dados por área de conhecimento
    const areasConhecimento = filteredProjetos.reduce((acc, projeto) => {
      if (projeto.area_conhecimento) {
        acc[projeto.area_conhecimento] = (acc[projeto.area_conhecimento] || 0) + 1;
      }
      return acc;
    }, {});

    // Preparar dados para o gráfico de barras (área de conhecimento)
    const labelsAreasConhecimento = Object.keys(areasConhecimento);
    const dataValuesAreasConhecimento = Object.values(areasConhecimento);

    setDataAreasConhecimento({
      labels: labelsAreasConhecimento,
      datasets: [
        {
          label: 'Projetos de Extensão por Área de Conhecimento',
          data: dataValuesAreasConhecimento,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
          ],
          borderColor: '#fff',
          borderWidth: 1,
        },
      ],
    });

    // Agrupar dados por área temática
    const areasTematicas = filteredProjetos.reduce((acc, projeto) => {
      if (projeto.area_tematica) {
        acc[projeto.area_tematica] = (acc[projeto.area_tematica] || 0) + 1;
      }
      return acc;
    }, {});

    // Preparar dados para o gráfico de barras (área temática)
    const labelsAreaTematica = Object.keys(areasTematicas);
    const dataValuesAreaTematica = Object.values(areasTematicas);

    setDataAreaTematica({
      labels: labelsAreaTematica,
      datasets: [
        {
          label: 'Projetos de Extensão por Área Temática',
          data: dataValuesAreaTematica,
          backgroundColor: '#FFCE56',
          borderColor: '#fff',
          borderWidth: 1,
        },
      ],
    });

    // Agrupar dados por situação
    const situacoes = filteredProjetos.reduce((acc, projeto) => {
      if (projeto.situacao) {
        acc[projeto.situacao] = (acc[projeto.situacao] || 0) + 1;
      }
      return acc;
    }, {});

    // Preparar dados para o gráfico de pizza (situação)
    const labelsSituacao = Object.keys(situacoes);
    const dataValuesSituacao = Object.values(situacoes);

    setDataSituacao({
      labels: labelsSituacao,
      datasets: [
        {
          label: 'Projetos de Extensão por Situação',
          data: dataValuesSituacao,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
          ],
          borderColor: '#fff',
          borderWidth: 1,
        },
      ],
    });

  }, [filteredProjetos]);

  const optionsPie = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} projetos`;
          },
        },
      },
    },
  };

  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} projetos`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Categoria',
        },
        ticks: {
          maxRotation: 90,
          minRotation: 45,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Quantidade de Projetos',
        },
        beginAtZero: true,
      },
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="filters">
        <AnoFilter selectedAnos={selectedAnos} handleAnoChange={setSelectedAnos} anos={['2016','2017','2018','2019','2020', '2021', '2022', '2023','2024','2025','2026']} />
        <CampusFilter selectedCampus={selectedCampus} handleCampusChange={setSelectedCampus} />
      </div>
      <div className="chart-container">
        <div className="chart-section">
          <h2>Projetos de Extensão por Modalidade</h2>
          <div className="chart">
            <Pie data={dataModalidades} options={optionsPie} />
          </div>
          <p className="legend-info">Clique nas legendas para ocultar ou mostrar categorias.</p>
        </div>
        <div className="chart-section">
          <h2>Projetos de Extensão por Área de Conhecimento</h2>
          <div className="chart">
            <Pie data={dataAreasConhecimento} options={optionsPie} />
          </div>
          <p className="legend-info">Clique nas legendas para ocultar ou mostrar categorias.</p>
        </div>
        <div className="chart-section">
          <h2>Projetos de Extensão por Área Temática</h2>
          <div className="chart">
            <Bar data={dataAreaTematica} options={optionsBar} />
          </div>
        </div>
        <div className="chart-section">
          <h2>Projetos de Extensão por Situação</h2>
          <div className="chart">
            <Pie data={dataSituacao} options={optionsPie} />
          </div>
          <p className="legend-info">Clique nas legendas para ocultar ou mostrar categorias.</p>
        </div>
      </div>
    </div>
  );
};

export default Grafico;
