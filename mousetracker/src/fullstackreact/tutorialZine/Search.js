import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = { searchString : ''};
    }

    onChange(e){
        let text = e.target.value;        
        this.setState({searchString : text});
    }

    render(){
        var items = this.props.items;
        var searchString = this.state.searchString.trim().toLowerCase();

        if (searchString.length > 0){
             // We are searching. Filter the results.
            libraries = libraries.filter(item => item.name.toLowerCase().match(searchString))
        }
        else{
            libraries = this.props.items;
        }
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.searchString} 
                    onChange={this.onChange.bind(this)} 
                    placeholder="Enter Search Text here" />
                    <ul> 
                        { 
                            libraries.map((l) => {
                                return(
                                <div> 
                                <li>{l.name} 
                                    <a href={l.url}>{l.url}</a>
                                </li>
                                </div>
                                )
                        }) }
                    </ul>
            </div>
        )
    }
}


var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];


export {libraries, Search };