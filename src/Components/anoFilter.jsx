import Select from 'react-select';
import PropTypes from 'prop-types';

const AnoFilter = ({ selectedAnos, handleAnoChange, anos }) => {
  // Converte os anos para o formato esperado pelo react-select
  const options = anos.map((ano) => ({
    value: ano,
    label: ano,
  }));

  const handleChange = (selectedOptions) => {
    // Extrai os valores selecionados
    const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
    handleAnoChange(selectedValues);
  };

  return (
    <div>
      <label htmlFor="ano-filter">Filtrar por Ano:</label>
      <Select
        id="ano-filter"
        options={options}
        isMulti
        value={options.filter((option) => selectedAnos.includes(option.value))}
        onChange={handleChange}
        placeholder="Selecione os anos"
      />
    </div>
  );
};

AnoFilter.propTypes = {
  selectedAnos: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAnoChange: PropTypes.func.isRequired,
  anos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnoFilter;
