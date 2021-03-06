import React from 'react';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';

class Header extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false
    }
  }

  // toggle visibility when run on the state
  showSearch() {
    alert("Clicked");
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }

  submitForm(val){
      this.props.onSearch(val);
  }

  render() {
    // Classes to add to the <input /> element
    let searchInputClasses = ["searchInput"];

    // Update the class array if the state is visible
    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }

    const wrapperStyle = {
      backgroundColor: 'rgba(251, 202, 43, 1)'
    }

    const titleStyle = {
      color: '#111111'
    }

    const menuColor = {
      backgroundColor: '#111111'
    }

    return (
      <div style={wrapperStyle} className="header">
        <div className="menuIcon">
          <div className="dashTop" style={menuColor}></div>
          <div className="dashBottom" style={menuColor}></div>
          <div className="circle" style={menuColor}></div>
        </div>

        <span style={titleStyle} className="title">
          {this.props.title}
        </span>

       <SearchForm
          searchVisible={this.state.searchVisible}
          onSubmit={this.props.onSubmit} />

        {/* Adding an onClick handler to call the showSearch button */}
        <div
          style={titleStyle}
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

Header.propTypes = {
    onSearch: PropTypes.func
}

export default Header