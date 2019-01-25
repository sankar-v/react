import React from 'react';

class ServiceChooser extends React.Component{

    constructor(props){
        super(props);
        this.state = { total : 0 };
    }

    addTotal( price ){
        this.setState( { total: this.state.total + price } );
    }

    render() {
        var services = this.props.items.map( (service) => {
            return <Service name={service.name} 
                            price={service.price} 
                            active={service.active} 
                            addTotal={this.addTotal.bind(this)} />;
        });

        return (
            <div>
                    <h1>Our services</h1>
                    <div id="services">
                        {services}
                           <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
                    </div>
                </div>
        )
    }
}

class Service extends React.Component{

    constructor(props){
        super(props);
        this.state = { active: false };
    }
    
    clickHandler(){
        var active = !this.state.active;
        this.setState({ active: active });
        // Notify the ServiceChooser, by calling its addTotal method
        this.props.addTotal( active ? this.props.price : -this.props.price );
    }

    render(){
        return  (
            <p className={ this.state.active ? 'active' : '' } 
                onClick={this.clickHandler.bind(this)}>
                {this.props.name}
                <b>${this.props.price.toFixed(2)}</b>
            </p>
        )
    }
}

var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

export {services, ServiceChooser, Service};