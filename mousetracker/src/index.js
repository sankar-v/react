import React from 'react';
import ReactDOM from 'react-dom';

//import 'font-awesome/css/font-awesome.css';
import './index.css';

import SearchForm from './fullstackreact/components/Timeline/SearchForm';
import SearchFormWithSubmit from './fullstackreact/components/Timeline/SearchFormWithSubmit';
import Header from './fullstackreact/components/Timeline/Header';
import HeaderSearch from './fullstackreact/components/Timeline/HeaderSearch';
import ContentSearch from './fullstackreact/components/Timeline/ContentSearch';
import HeaderSearchFormWithSubmit from './fullstackreact/components/Timeline/HeaderSearchFormWithSubmit';

class SimpleSearchHolder extends React.Component{
    
    state = { searchText: ''};
    
    /*handleSubmit = searchText => this.setState({searchText});*/
    handleSubmit = (searchText) =>{
        this.setState({searchText});
        alert("Inside index->handleSubmit" + searchText);
    } 
    render(){
        const { Component } = this.props;
        const { searchText } = this.state;
        return(
            <div>
                <Component searchText = {searchText} 
                    onSubmit={this.handleSubmit} />
                <div> You searched for : {searchText}</div>
            </div>
        );
    }
}

export const load = () => {
    ReactDOM.render(<SearchForm />, document.getElementById('demo3'));

    ReactDOM.render(<Header />, document.getElementById('searchStylesDemo'));
    
    ReactDOM.render(
        <SimpleSearchHolder Component={SearchFormWithSubmit} />,
        document.getElementById('searchForm')
    );
    

    ReactDOM.render(
        <SimpleSearchHolder Component={HeaderSearchFormWithSubmit} />,
        document.getElementById('headerSearch')
    );

    //ReactDOM.render(<ContentSearch />, document.getElementById('searchDemo'));
};

try {
    load();
}catch (e) {
    console.log(e);
}