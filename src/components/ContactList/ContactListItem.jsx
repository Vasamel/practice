import { Component } from 'react';

export class ContactListItem extends Component {
  state = {
    name: this.props.contact.name,
    number: this.props.contact.number,
    isEdit: false,
  }

handleEditContact = () => {
  if (!this.state.isEdit) {
    this.setState({isEdit: true})
  } else {
    this.setState({isEdit:false})
    this.props.editContact({id:this.props.contact.id,name:this.state.name,number:this.state.number})
  }
}

handleChange = (evt) => {
this.setState({[evt.target.name]:evt.target.value})
}

  render() {
    const {contact, deleteContact} = this.props
    return (
      <li key={contact.id}>
        {this.state.isEdit? <label>Name:<input name='name' onChange={this.handleChange} value={this.state.name} type="text" /></label>:<p>Name: {contact.name}</p>}
        {this.state.isEdit? <label>Number:<input name='number' onChange={this.handleChange} value={this.state.number} type="text" /></label>:<p>Number: {contact.number}</p>}
        <button type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
        <button type="button" onClick={this.handleEditContact}>
          {this.state.isEdit?'Save':'Edit'}
        </button>
      </li>
    );
  }
}
