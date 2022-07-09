export const ContactList = ({ visibalFiltr, deleteContact }) => {
  return (
    <ul>
      {visibalFiltr.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
