import Select from 'react-select';
import PropTypes from 'prop-types';

const ModalidadeFilter = ({ selectedModalidade, handleModalidadeChange, modalidades }) => {
  // Verifica se modalidades está definido e é um array
  if (!Array.isArray(modalidades)) {
    console.error('Modalidades deve ser um array.');
    return null;
  }

  // Converte as modalidades para o formato esperado pelo react-select
  const options = modalidades.map((modalidade) => ({
    value: modalidade,
    label: modalidade,
  }));

  const handleChange = (selectedOptions) => {
    // Extrai os valores selecionados
    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
    handleModalidadeChange(selectedValues);
  };

  return (
    <div>
      <label>Filtrar por Modalidade:</label>
      <Select
        options={options}
        isMulti
        value={options.filter(option => selectedModalidade.includes(option.value))}
        onChange={handleChange}
        placeholder="Selecione as modalidades"
      />
    </div>
  );
};

ModalidadeFilter.propTypes = {
  selectedModalidade: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleModalidadeChange: PropTypes.func.isRequired,
  modalidades: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModalidadeFilter;
