import "./App.css";

import { Component } from "react";

//import custom Components
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFieldValue: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state.monsters);
          }
        );
        // this.setState({ monsters: users });
      });
  }

  searchHandler = (e) => {
    const inputBoxValue = e.target.value.toLowerCase();
    this.setState({ searchFieldValue: inputBoxValue });
  };
  render() {
    const { monsters, searchFieldValue } = this.state;
    const { searchHandler } = this;
    const filteredMonsters = monsters.filter((monster) => {
      const { name, email } = monster;
      return (
        name.toLowerCase().includes(searchFieldValue) ||
        email.toLowerCase().includes(searchFieldValue)
      );
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search Monsters"
          changeHandler={searchHandler}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
