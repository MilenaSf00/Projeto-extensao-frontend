import PropTypes from 'prop-types';



const formatDate = (date) => {
  if (!date) return ''; // Retorna uma string vazia se não houver data
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0'); // Meses são baseados em zero
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

// Função para escapar valores de CSV
const escapeCSVValue = (value) => {
  if (typeof value === 'string') {
    // Escapa aspas duplas dentro do valor
    const escapedValue = value.replace(/"/g, '""');
    // Adiciona aspas duplas ao redor do valor se contiver vírgulas ou aspas duplas
    return `"${escapedValue}"`;
  }
  return value;
};

const ExportCSVButton = ({ data, fileName }) => {
  const exportToCSV = () => {
    const csvRows = [];
    const headers = [
      'id_projeto',
      'modalidade',
      'unidade_origem',
      'titulo_projeto',
      'area_conhecimento',
      'area_tematica',
      'linha_tematica',
      'coord_projeto',
      'email_coord_projeto',
      'dt_inicio_proj',
      'dt_fim_proj',
      'situacao',
      'ult_alter_proj',
      'palavras_chave',
      'resumo',
      'parcerias'
    ];
    csvRows.push(headers.map(escapeCSVValue).join(','));

    data.forEach(projeto => {
      const row = [
        projeto.id_projeto,
        projeto.modalidade,
        projeto.unidade_origem,
        projeto.titulo_projeto,
        projeto.area_conhecimento,
        projeto.area_tematica,
        projeto.linha_tematica,
        projeto.coord_projeto,
        projeto.email_coord_projeto,
        formatDate(projeto.dt_inicio_proj),
        formatDate(projeto.dt_fim_proj),
        projeto.situacao,
        formatDate(projeto.ult_alter_proj),
        projeto.palavras_chave,
        projeto.resumo,
        projeto.parcerias
      ];
      csvRows.push(row.map(escapeCSVValue).join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={exportToCSV}>
      Exportar para CSV
    </button>
  );
};

ExportCSVButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fileName: PropTypes.string.isRequired,
};

export default ExportCSVButton;
