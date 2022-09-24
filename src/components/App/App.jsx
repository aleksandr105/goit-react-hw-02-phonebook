import React, { Component } from 'react';
import {
  Container,
  TitleLIstContacts,
  Titel,
  NoContactMessage,
} from './App.styled';
import { ContactForm } from '../ContatctForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = ({ name, number }, { resetForm }) => {
    const contactСheck = this.state.contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (!contactСheck) {
      const contact = {
        id: name,
        name: name,
        number: number.match(/\d{3}(?=\d{2,3})|\d+/g).join('-'),
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));

      resetForm();
    } else {
      alert(`${name} is alreadi in contacts`);
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  showFiltered = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const visibalFiltr = this.showFiltered();
    return (
      <section>
        <Container>
          <Titel>Phonebook</Titel>
          <ContactForm handleSubmit={this.handleSubmit} />
          <TitleLIstContacts>Contacts</TitleLIstContacts>

          {this.state.contacts.length > 0 ? (
            <>
              <Filter changeFilter={this.changeFilter} />
              <ContactList
                visibalFiltr={visibalFiltr}
                deleteContact={this.deleteContact}
              />
            </>
          ) : (
            <NoContactMessage>No contact yet</NoContactMessage>
          )}
        </Container>
      </section>
    );
  }
}
