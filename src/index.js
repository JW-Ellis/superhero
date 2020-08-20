import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Carousel from "./Carousel";

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

const App = () => {
  return (
    <div className="App">
      <SuperheroDropdown />
      <Carousel />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
