export const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li key={contact.id}>
      <p>Name: {contact.name}</p>
      <p>Number: {contact.number}</p>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};
