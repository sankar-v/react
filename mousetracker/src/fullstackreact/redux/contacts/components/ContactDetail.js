import React, { Component } from 'react'
import { connect } from 'react-redux'

class ContactDetail extends Component {
  render() {
    if (!this.props.contact) {
      return (
        <div>Select a contact from the list to see its details</div>
      );
    } 
    return (
      <div>
        <h3>Contact Details for: {this.props.contact.name}</h3>
        <div>Phone: {this.props.contact.phone}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.activeContact
  }
}

export default connect(mapStateToProps)(ContactDetail);