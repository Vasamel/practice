export const Filter = ({ value, setValue }) => {
  return (
    <label>
      {' '}
      Filter:
      <input type="text" onChange={setValue} value={value} />
    </label>
  );
};
