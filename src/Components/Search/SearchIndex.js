import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     results: '',
   }
 }

 componentWillMount() {
  this.setState({
    results: this.state.things
  });
}


 searchFunction = (e) => {
   let currentList = [];
   let newList = [];

   let searchString = e;

   if (searchString !== "") {
    currentList = this.state.things;
    newList = currentList.filter(item => {
      const lowerCase = item.toLowerCase();
      const filter = e.toLowerCase()
      return lowerCase.includes(filter)
    }) 
   } else {
    newList = this.state.things;
  }

   this.setState({
     results: newList
   })

 }

 render() {
   return (
     <div>
       <Input placeholder='Search Here' value={this.state.search} onChange={(e) => {this.searchFunction(e.target.value)}}/>
       <h3>Results:</h3>
       {this.state.results.map((item, index) => {
     return(<span key={index}>{`${item} `}</span>) 
     })}
     </div>
     )
   }
 }

 
export default SearchIndex;
