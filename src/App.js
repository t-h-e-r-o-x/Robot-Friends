import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

  }

  render(){
    const filteredRobo = this.state.robots.filter( robot => {
       return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
     })
return(
  <div className="tc">
    <h1 className="f1 dark-red">RoboFriends</h1>
    <Searchbox  searchChange={this.onSearchChange}/>
  <Scroll>
    <CardList robots={filteredRobo} />
  </Scroll>
  </div>
);
}
}
export default App;
