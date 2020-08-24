import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Carousel from "./Components/Carousel";
import HeroSlider from "./Components/HeroSlider";

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
  {
    title: "Bruce Wayne",
    description: "First appeared in 1953",
    image:
      "https://vignette.wikia.nocookie.net/marvel_dc/images/9/9d/Batman_003.jpg/revision/latest?cb=20090114064958",
  },
  {
    title: "Azrael",
    description: "First appeared in 1980",
    image:
      "https://i.pinimg.com/236x/77/73/73/7773732abb609502e17656c2e5dbfee7--batman-tattoo-dc-comic.jpg",
  },
  {
    title: "Dick Grayson",
    description: "First appeared in 1532",
    image: "https://images-na.ssl-images-amazon.com/images/I/81gPs19EzjL.jpg",
  },
  {
    title: "Jason Todd",
    description: "First appeared in 1525",
    image:
      "https://cdn.mos.cms.futurecdn.net/F6fwMEGACa7gBvJfjKffrg-1200-80.jpg",
  },
];
const App = () => {
  return (
    <div className="App">
      {/* <SuperheroDropdown /> */}
      {/* <Carousel slides={images} /> */}
      <HeroSlider slides={images} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
