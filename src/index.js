import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Carousel from "./Components/Carousel";

const SuperheroDropdown = () => {
  const [items, setItems] = React.useState([]);
  const [value, setValue] = useState("Luke Skywalker");
  React.useEffect(() => {
    //pulls json data
    async function getHeroes() {
      const response = await fetch("http://swapi.dev/api/people/?page=2");
      const body = await response.json();
      //assigns fetched json data to object
      setItems(
        body.results.map(({ name, eye_color }) => ({
          label: name,
          value: name,
          eye: eye_color,
        }))
      );
    }

    getHeroes();
  }, []);

  return (
    <div>
      {/* dropdown that sets value  */}
      <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div>
        {/* filters based on value */}
        {items
          .filter((item) => item.value === value)
          .map((filteredPerson) => (
            <li key={value}>{filteredPerson.eye}</li>
          ))}
      </div>
    </div>
  );
};

const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];

const App = () => {
  return (
    <div className="App">
      {/* <SuperheroDropdown /> */}
      <Carousel slides={images} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
