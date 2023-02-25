import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { getFilteredArray } from 'utils/getFilteredArray';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const isUnique = this.state.contacts.find(
      item => item.name === contact.name
    );
    if (isUnique) {
      alert('Contact already exist');
      return false;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    return true;
  };

  editContact = updatedContact => {
    this.setState(({ contacts }) => ({
      contacts: contacts.map(contact => {
        if (contact.id === updatedContact.id) {
          const newContact = { ...contact, ...updatedContact };
          return newContact;
        }
        return contact;
      }),
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = getFilteredArray(contacts, 'name', filter);
    return (
      <div>
        <Section title="Add contact">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Search">
          <Filter value={filter} setValue={this.setFilter} />
        </Section>
        <Section title="Contact list">
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
            editContact={this.editContact}
          />
        </Section>
      </div>
    );
  }
}
