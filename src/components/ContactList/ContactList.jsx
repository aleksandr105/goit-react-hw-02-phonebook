import { List, ButtonDelete, Item, ItemText } from './ContactList.styled';

export const ContactList = ({ visibalFiltr, deleteContact }) => {
  return (
    <List>
      {visibalFiltr.map(({ id, name, number }, index) => (
        <Item key={id}>
          {index + 1}..
          <ItemText>
            {name}: {number}
          </ItemText>
          <ButtonDelete type="button" onClick={() => deleteContact(id)}>
            Delete
          </ButtonDelete>
        </Item>
      ))}
    </List>
  );
};
