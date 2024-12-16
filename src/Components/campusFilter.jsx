import Select from 'react-select';
import PropTypes from 'prop-types';

const CampusFilter = ({ selectedCampus, handleCampusChange }) => {
  const campuses = [
    "CAMPUS SANTANA DO LIVRAMENTO",
    "CAMPUS SAO BORJA",
    "CAMPUS JAGUARAO",
    "CAMPUS BAGE",
    "REITORIA",
    "CAMPUS ALEGRETE",
    "CAMPUS URUGUAIANA",
    "CAMPUS SAO GABRIEL",
    "CAMPUS DOM PEDRITO",
    "CAMPUS CACAPAVA DO SUL",
    "CAMPUS ITAQUI"
  ];

  // Converte os campus para o formato esperado pelo react-select
  const options = campuses.map((campus) => ({
    value: campus,
    label: campus,
  }));

  const handleChange = (selectedOptions) => {
    // Extrai os valores selecionados
    const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
    handleCampusChange(selectedValues);
  };

  return (
    <div>
      <label htmlFor="campus-filter">Filtrar por Campus:</label>
      <Select
        id="campus-filter"
        options={options}
        isMulti
        value={options.filter((option) => selectedCampus.includes(option.value))}
        onChange={handleChange}
        placeholder="Selecione os campus"
      />
    </div>
  );
};

CampusFilter.propTypes = {
  selectedCampus: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCampusChange: PropTypes.func.isRequired,
};

export default CampusFilter;
