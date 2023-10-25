
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>
        <span>Filter contacts by name:</span>
        <FilterInput
          onChange={e => onFilterChange(e.target.value)}
          value={filter}
          type="text"
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
