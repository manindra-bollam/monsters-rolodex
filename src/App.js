import "./App.css";

import { useState, useEffect } from "react";

//import custom Components
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

/* class App extends Component {
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
} */

const App = () => {
  console.log("STart");
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const searchHandler = (e) => {
    const searchFieldValue = e.target.value.toLowerCase();
    setSearchField(searchFieldValue);
  };

  useEffect(() => {
    console.log("Render1");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    console.log("Render2");
    const monstersFilter = monsters.filter((monster) => {
      const { name, email } = monster;
      return (
        name.toLowerCase().includes(searchField) ||
        email.toLowerCase().includes(searchField)
      );
    });
    setFilteredMonsters(monstersFilter);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Creatures Compendium</h1>
      <SearchBox placeholder="search Monsters" changeHandler={searchHandler} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
