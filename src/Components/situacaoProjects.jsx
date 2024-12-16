
import Select from 'react-select';
import PropTypes from 'prop-types';

const SituacaoFilter = ({ selectedSituacoes, handleSituacaoChange }) => {
  const situacoes = ["Registrado", "Finalizado"]; // Lista de situações que você quer filtrar

  // Converte as situações para o formato esperado pelo react-select
  const options = situacoes.map((situacao) => ({
    value: situacao,
    label: situacao,
  }));

  const handleChange = (selectedOptions) => {
    // Extrai os valores selecionados
    const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
    handleSituacaoChange(selectedValues);
  };

  return (
    <div>
      <label htmlFor="situacao-filter">Filtrar por Situação:</label>
      <Select
        id="situacao-filter"
        options={options}
        isMulti
        value={options.filter((option) => selectedSituacoes.includes(option.value))}
        onChange={handleChange}
        placeholder="Selecione as situações"
      />
    </div>
  );
};

SituacaoFilter.propTypes = {
  selectedSituacoes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSituacaoChange: PropTypes.func.isRequired,
};

export default SituacaoFilter;
