export const Filter = ({ changeFilter }) => {
  return (
    <label htmlFor="">
      Fild contacts by name
      <input type="text" onChange={changeFilter} />
    </label>
  );
};
