
import Select from 'react-select';
import PropTypes from 'prop-types';

const AreaConhecimentoFilter = ({ selectedAreas, handleAreaChange, areasDeConhecimento }) => {
  // Converte as áreas de conhecimento para o formato esperado pelo react-select
  const options = areasDeConhecimento.map((area) => ({
    value: area,
    label: area,
  }));

  const handleChange = (selectedOptions) => {
    // Extrai os valores selecionados
    const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
    handleAreaChange(selectedValues);
  };

  return (
    <div>
      <label>Filtrar por Área de Conhecimento:</label>
      <Select
        options={options}
        isMulti
        value={options.filter((option) => selectedAreas.includes(option.value))}
        onChange={handleChange}
        placeholder="Selecione as áreas de conhecimento"
      />
    </div>
  );
};

AreaConhecimentoFilter.propTypes = {
  selectedAreas: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAreaChange: PropTypes.func.isRequired,
  areasDeConhecimento: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AreaConhecimentoFilter;
