import React, {Component} from 'react';
import './App.css';
import ItemDetails from './ItemDetails';
import NewItem from './NewItem';
import EditItem from './EditItem';
import ItemService from './shared/MockItemService';

class App extends Component{
    constructor(props){
        super(props);
        this.itemService = new ItemService();
    }

    state = {
        items: [],
        showDetails: false,
        editItem: false,
        selectedItem: null,
        newItem : null,
    };

    componentDidMount(){
        this.getItems();
    }

    getItems = () => {
        this.itemService.getItems()
                        .then(items =>  {                    
                                //alert(JSON.stringify(items))      
                                this.setState({items:items})
                        });
    }

    onSelect =(itemLink) =>{
        //alert("inside onSelect ItemLink::" + JSON.stringify(itemLink));
        this.clearState();
        this.itemService.getItem(itemLink)
            .then(item => this.setState({
                showDetails: true,
                selectedItem: item,
            }));
    }

    onCancel =()=>{
        this.clearState();
    }

    onNewItem = () =>{
        this.clearState();
        this.setState({
            newItem:true,
        });
    }

    onEditItem =(item) => {
        alert("App: onEditItem");
        this.setState({
            showDetails: false,
            selectedItem: item,
            editItem: true,
            newItem: null,
        })
    }

    onDeleteItem = (itemLink) => {
        this.clearState();
        this.itemService.deleteItem(itemLink)
            .then(item => { this.getItems()});
    }

    onCancelEdit = () => {
        this.setState( {
            showDetails: false,
            editItem: false,
            newItem: null
        });
    }

    onUpdateItem = (item) => {
        alert('App onUpdateItem')
        this.clearState();
        this.itemService.updateItem(item)
            .then(item => { this.getItems()});
    }

    onCreateNewItem =(newItem) =>{
        //alert('inside App.js onCreateItem' + JSON.stringify(newItem));
        this.clearState();
        this.itemService.createItem(newItem)
            .then(item => { this.getItems()});
    }

    clearState = () => {
        this.setState({
            showDetails: false,
            selectedItem: null,
            editItem: false,
            newItem: null
        });
    }

    renderListItems = () => {
        const items = this.state.items;
        if (!items) return null;
        const listItems = items.map((item) =>
        <li key={item.link} onClick={() => this.onSelect(item.link)}>
           <span className="item-name">{item.name}</span> |  {item.summary}
        </li>
        ); 
        return listItems;  
    }

    render(){
        
        const { 
                showDetails, 
                editItem, 
                selectedItem,
                newItem 
        } = this.state;

        const listItems = this.renderListItems();
        if (!listItems) return null;

        return(
            <div className = "App">
                <ul className = "items">
                    {this.renderListItems()}
                </ul>    
                <br/>
                <button 
                    type="button" 
                    name="button"
                    onClick = {this.onNewItem}>
                    New Item    
                </button>
                <br/>
                {newItem && 
                    <NewItem 
                        onSubmit={this.onCreateNewItem}
                        onCancel = {this.onCancel}
                    />
                }
                {showDetails && 
                    selectedItem && 
                    <ItemDetails 
                        item={selectedItem} 
                        onEditItem={this.onEditItem}  
                        onDeleteItem={this.onDeleteItem} 
                    />
                }
                {editItem && 
                    selectedItem && 
                    <EditItem 
                        onSubmit={this.onUpdateItem} 
                        onCancel={this.onCancelEdit} 
                        item={selectedItem} 
                    />
                }
            </div>
        )
    }
}

export default App;