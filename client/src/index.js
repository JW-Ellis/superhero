import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Loading from "./Components/Loading";
import HeroSlider from "./Components/HeroSlider";

const SuperheroDropdown = () => {
  const [items, setItems] = React.useState([]);
  const [value, setValue] = useState("Batman");
  //displays loading component when fetching heroes from database
  const [loading, setLoading] = useState(true);
  //pulls json data
  React.useEffect(() => {
    async function getHeroes() {
      const response = await fetch(
        "https://warm-falls-14765.herokuapp.com/api/heroes"
      );
      const body = await response.json();
      setItems(
        body.data.map(({ title, id, hero, description, image }) => ({
          name: title,
          value: hero.name,
          description: description,
          image,
          image,
          nameID: id,
          hero: hero.name,
          heroID: hero.id,
        }))
      );
      setLoading(false);
    }
    getHeroes();
  }, []);

  //creates dropdown of unique heroes and filters out duplicates
  const heroOptions = new Map([
    ...items.map((item) => [item.heroID, item.hero]),
  ]);

  const filteredHeroes = () => {
    if (!value) {
      return items;
    }
    return items.filter((item) => String(item.value) === value);
  };

  return (
    <div>
      <div className="header">
        <h1>CAPENDIUM</h1>
        <h2>A gallery of sidekicks and alternate universe characters</h2>
      </div>

      <div className="select">
        <p>Select a hero</p>
        {/* dropdown that sets value  */}
        <div className="selector">
          <select
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
          >
            {[...heroOptions].map(([heroID, hero]) => (
              <option id={heroID} value={hero}>
                {hero}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="slider">
        <div className="stripe"></div>
        {/* Displays loading component if fetching or slides when data is fetched */}
        {loading ? (
          <Loading />
        ) : (
          <HeroSlider slides={filteredHeroes().map((item) => item)} />
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <SuperheroDropdown />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
