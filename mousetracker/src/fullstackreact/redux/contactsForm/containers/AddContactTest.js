import React from 'react';
import {connect} from 'react-redux'
import { addContact } from '../actions'; 

const AddContact = ({newContact, addContact}) => {
  return (
    <div>
      {newContact.name} <br />
      {newContact.email} <br />
      {newContact.phone} <br />
       
      Are you sure you want to add this contact?
      <button onClick={addContact}> Click to add the new Contact </button>
    </div>
  )
}
 
const mapStateToProps = state => {
  return {
    newContact : state.contacts.newContact
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    addContact : () => dispatch(addContact())
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact)