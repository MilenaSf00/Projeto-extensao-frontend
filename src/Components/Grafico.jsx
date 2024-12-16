import { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';
import axios from 'axios';
import './Grafico.css'; // Certifique-se de criar este arquivo CSS

// Registrar os componentes necessários do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const Grafico = () => {
  const [dataModalidades, setDataModalidades] = useState({ labels: [], datasets: [] });
  const [dataAreasConhecimento, setDataAreasConhecimento] = useState({ labels: [], datasets: [] });
  const [dataCampus, setDataCampus] = useState({ labels: [], datasets: [] });
  const [dataAreaTematica, setDataAreaTematica] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get('https://projeto-extensao-backend.vercel.app/projetos');
        //const response = await axios.get('http://localhost:3333/projetos');
        const projetos = response.data;

        // Agrupar dados por modalidade
        const modalidades = projetos.reduce((acc, projeto) => {
          if (projeto.modalidade) {
            acc[projeto.modalidade] = (acc[projeto.modalidade] || 0) + 1;
          }
          return acc;
        }, {});

        // Preparar dados para o gráfico de pizza
        const labelsModalidades = Object.keys(modalidades);
        const dataValuesModalidades = Object.values(modalidades);

        setDataModalidades({
          labels: labelsModalidades,
          datasets: [
            {
              label: 'Projetos de Extensão por Modalidade',
              data: dataValuesModalidades,
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40'
              ],
              borderColor: '#fff',
              borderWidth: 1,
            },
          ],
        });

        // Agrupar dados por área de conhecimento
        const areasConhecimento = projetos.reduce((acc, projeto) => {
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
              backgroundColor: '#4BC0C0', // Cor das barras
              borderColor: '#fff', // Cor da borda das barras
              borderWidth: 1,
            },
          ],
        });

        // Agrupar dados por campus
        const campus = projetos.reduce((acc, projeto) => {
          if (projeto.unidade_origem) {
            acc[projeto.unidade_origem] = (acc[projeto.unidade_origem] || 0) + 1;
          }
          return acc;
        }, {});

        // Preparar dados para o gráfico de barras (campus)
        const labelsCampus = Object.keys(campus);
        const dataValuesCampus = Object.values(campus);

        setDataCampus({
          labels: labelsCampus,
          datasets: [
            {
              label: 'Número de Projetos de Extensão por Campus',
              data: dataValuesCampus,
              backgroundColor: '#FF9F40', // Cor das barras
              borderColor: '#fff', // Cor da borda das barras
              borderWidth: 1,
            },
          ],
        });

        // Agrupar dados por área temática
        const areasTematicas = projetos.reduce((acc, projeto) => {
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
              backgroundColor: '#FFCE56', // Cor das barras
              borderColor: '#fff', // Cor da borda das barras
              borderWidth: 1,
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
        setLoading(false);
      }
    };

    fetchProjetos();
  }, []);

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
  
        <div className="chart-container">
          <div className="chart-section">
            <h2>Projetos de Extensão por Modalidade</h2>
            <div className="chart">
              <Pie data={dataModalidades} options={optionsPie} />
            </div>
          </div>
          <div className="chart-section">
            <h2>Projetos de Extensão por Área de Conhecimento</h2>
            <div className="chart">
              <Bar data={dataAreasConhecimento} options={optionsBar} />
            </div>
          </div>
          <div className="chart-section">
            <h2>Projetos de Extensão por Área Temática</h2>
            <div className="chart">
              <Bar data={dataAreaTematica} options={optionsBar} />
            </div>
          </div>
          <div className="chart-section">
            <h2>Número de Projetos de Extensão por Campus</h2>
            <div className="chart">
              <Bar data={dataCampus} options={optionsBar} />
            </div>
          </div>
        </div>
      );
    };
    
    export default Grafico;