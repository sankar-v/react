import React from "react";
import "./App.css";

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      //alert('Item Details :: ComponentDidMount');
  }

  onEditItem = () => {
    alert("inside onEditItem")
    this.props.onEditItem(this.props.item);
  };

  onDeleteItem = () => {
    const item = this.props.item;
    if (window.confirm("Are you sure to delete item: " + item.name + " ?")) {
      this.props.onDeleteItem(item.link);
    }
  };

  render() {
    const item = this.props.item;
    return (
        <form >
        <div className="input-panel">
        <span className="form-caption">{item.name}</span>
        <div>
          <span className="field-name">Name:</span>
          <br /> {item.name}
        </div>
        <div>
          <span className="field-name">Summary:</span>
          <br /> {item.summary}
        </div>
        <div>
          <span className="field-name">Year:</span>
          <br /> {item.year}
        </div>
        <div>
          <span className="field-name">Country:</span>
          <br /> {item.country}
        </div>
        <div>
          <span className="field-name">Description:</span>
          <br /> {item.description}
        </div>
        <br />
        <button onClick={this.onDeleteItem}>Delete</button>
        <button onClick={this.onEditItem}>Edit</button>
      </div>
      </form>
    );
  }
}

export default ItemDetails;