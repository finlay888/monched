import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  constructor(){
    super()
    this.state = {
      meals:[],
      searchfield: ''
    }
    this.searchMeal = this.searchMeal.bind(this);
  }

  componentDidMount(){
    fetch('https://www.themealdb.com/api/json/v2/9973533/randomselection.php')
    .then(response => response.json())
    .then(list => this.setState({meals: list.meals}))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
    console.log(event.target.value)
  }

  searchMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v2/9973533/search.php?s=${this.state.searchfield}`)
    .then(response => response.json())
    .then(list => this.setState({meals : list.meals}))
    console.log(this.state.meals)
    console.log(this.state.searchfield)
  }

  render() {
    let { meals } = this.state;
    if (meals != null) {
      return (
        <div className="tc">
          <h1 className="tc f-headline">Monched</h1>
          <h1 className="tc ma2">Finding the food for you!!</h1>
          <SearchBox searchChange={this.onSearchChange}
            searchMeal={this.searchMeal}/>  
          <CardList meals={meals}/> 
        </div>
      );
    }else{
      return (
        <div className="tc">
          <h1 className="tc f-headline">Monched</h1>
          <h1 className="tc ma2">Finding the food for you!!</h1>
          <SearchBox searchChange={this.onSearchChange}
            searchMeal={this.searchMeal}/> 
          <h1 className="tc">No Results</h1> 
        </div>
      );
    }
  }
}

export default App;