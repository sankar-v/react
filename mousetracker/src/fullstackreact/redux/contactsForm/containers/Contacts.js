import React from 'react';
import '../Contacts.css';
import  AddContact  from './AddContact';
import ContactList from '../components/ContactList';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';

class Contacts extends React.Component{
    
    constructor(props){
        super(props);
        this.getContactList = this.getContactList.bind(this);
    }
    
    getContactList() {
        // Retrieve contactlist from the store
        return this.props.contactList;
    }

    render(){
        return(
            <div>
                <AddContact/>
                <br/>
                <ContactList 
                    contactList={this.getContactList} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contactList : state.contacts.contactList,
    searchText : state.contacts.searchText
});

const mapDispatchToProps = dispatch => ({
    fetchAllContacts : () => dispatch(fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);