import Select from 'react-select';
import PropTypes from 'prop-types';


const LinhaTematicaFilter = ({ selectedLinhas = [], handleLinhaChange, linhasTematicas }) => {
  // Converte as linhas temáticas para o formato esperado pelo react-select
  const options = linhasTematicas.map((linha) => ({
    value: linha,
    label: linha,
  }));

  const handleChange = (selectedOptions) => {
    // Extrai os valores selecionados
    const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
    handleLinhaChange(selectedValues);
  };

  return (
    <div>
      <label htmlFor="linha-tematica-filter">Filtrar por Linha Temática:</label>
      <Select
        id="linha-tematica-filter"
        options={options}
        isMulti
        value={options.filter((option) => selectedLinhas.includes(option.value))}
        onChange={handleChange}
        placeholder="Selecione as linhas temáticas"
      />
    </div>
  );
};


LinhaTematicaFilter.propTypes = {
  selectedLinhas: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleLinhaChange: PropTypes.func.isRequired,
  linhasTematicas: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LinhaTematicaFilter;
