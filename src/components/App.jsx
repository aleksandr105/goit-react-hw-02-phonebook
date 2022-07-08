import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, TitleLIstContacts } from './App.styled';
import * as yup from 'yup';

let initialValues = {
  name: '',
  number: '',
};

let schema = yup.object().shape({
  name: yup.string().min(5).max(12).required(),
  number: yup.string().length(7).required(),
});

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = { id: name, name: name, number: number };
    let arr = number.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
    console.log(arr);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    resetForm();
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  showFiltered = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const visibalFiltr = this.showFiltered();
    return (
      <section>
        <Container>
          <h1>Phonebook</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
            validationSchema={schema}
          >
            <Form name="phonebook" autoComplete="off">
              <label htmlFor="">
                Name
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="p" />
              </label>
              <label htmlFor="">
                Number
                <Field type="tel" name="number" />
                <ErrorMessage name="number" component="p" />
              </label>
              <button type="submit">Add contact</button>
            </Form>
          </Formik>
          <TitleLIstContacts>Contacts</TitleLIstContacts>
          <label htmlFor="">
            Fild contacts by name
            <input type="text" onChange={this.changeFilter} />
          </label>

          <ul>
            {visibalFiltr.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
                <button type="button" onClick={() => this.deleteContact(id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    );
  }
}
