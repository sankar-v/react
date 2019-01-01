import React from 'react';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = { inputText: 'Type your text here...',};
    }

    getInitialState(){
        return {value: 'Hello!'};
    }
    /*
    handleChange = (event) =>{
        const v = event.target.value;
        alert(v);
        this.setState(state => ({inputText: {v}}));
    }
    */
    render(){
        //class to add to the <input/> element
        let searchInputClasses = ["searchInput"];
        
        //Update the class array if the state is visible
        if (this.state.searchVisible) {
            searchInputClasses.push("active");
        }
          
        return(
            <div className="header">
                <div className="fa fa-more"></div>

                <span className="title">
                {this.props.title}
                </span>
                                
                <input 
                    type="text"
                    className={searchInputClasses.join(' ')}
                    placeholder="Search ..." />
      
                <div className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}

export default Header;