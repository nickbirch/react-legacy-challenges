import React, { Component } from "react";
import { Input, Form, Button } from "reactstrap";

export default class ToDoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      newListItem: "",
    };
    this.addListItem = this.addListItem.bind(this);
    this.updateListItem = this.updateListItem.bind(this);
    this.createItems = this.createItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  updateListItem(event) {
    let value = event.target.value;
    this.setState({
      newListItem: value,
    });
  }

  addListItem(event) {
    let newItem = this.state.newListItem;

    this.setState((prevState) => {
      return {
        toDoList: prevState.toDoList.concat(newItem),
        newListItem: "",
      };
    });
    event.preventDefault();
  }

  createItems(item, index) {
    return (
      <p key={index}>
        {item}
        <button onClick={() => this.deleteItem(index)}>
          Complete and Remove
        </button>
      </p>
    );
  }

  deleteItem(index) {
    let editList = this.state.toDoList;
    editList.splice(index, 1);
    this.setState({
      toDoList: editList,
    });
  }

  render() {
    const listItems = this.state.toDoList;
    let listDisplay = listItems.map(this.createItems);

    return (
      <div>
        <Form onSubmit={this.addListItem}>
          <Input
            type="text"
            placeholder="Add an Item to Your List"
            value={this.state.newListItem}
            onChange={this.updateListItem}
          />
          <Button className="mr-3" color="primary" type="submit">
            Add
          </Button>
        </Form>

        <h3>My List</h3>
        {this.state.toDoList.length > 0 ? (
          listDisplay
        ) : (
          <h5>Add Items to your List to see them here</h5>
        )}
      </div>
    );
  }
}
