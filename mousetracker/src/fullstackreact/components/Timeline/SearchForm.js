import React from 'react';

class SearchForm extends React.Component{
    
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        searchVisible: PropTypes.bool,
    }

    static defaultProps = {
        onSubmit = () =>{},
        searchVisible: false
    }

    constructor(props){
        super(props);
        this.state = {
            searchText: '',
        }
    }

    updateSearchInput(e){
        const val = e.target.value;
        this.setState({
            searchText: val
        });
    }

    submitForm(e){
        // prevent the form from reloading the entire page
        e.preventDefault();
        // call the callback with the search value
        const { searchText } = this.state;
        this.props.onSubmit(this.state.searchText);
    }

    render(){
        const { searchVisible } = this.state;
        let searchClasses = ['searchInput'];
        if (searchVisible){
            searchClasses.push('active');
        }
        
        return(
            <form onSubmit={this.submitForm.bind(this)}>
                <input 
                    type="search"
                    className={searchClasses.join(' ')}
                    onChange={this.updateSearchInput.bind(this)}
                    placeholder="Search..."/>
                <div
                    onClick = {this.showSearch.bind(this)}
                    className="fa fa-search searchIcon">
                </div>          
            </form>
        );
    }
}

export default SearchForm;