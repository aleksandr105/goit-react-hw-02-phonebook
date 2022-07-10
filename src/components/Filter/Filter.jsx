import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ changeFilter }) => {
  return (
    <FilterLabel htmlFor="">
      Fild contacts by name
      <FilterInput
        type="text"
        placeholder="Aleksandr"
        onChange={changeFilter}
      />
    </FilterLabel>
  );
};
