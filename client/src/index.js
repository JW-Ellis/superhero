import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Carousel from "./Components/Carousel";
import HeroSlider from "./Components/HeroSlider";

const SuperheroDropdown = () => {
  const [items, setItems] = React.useState([]);
  const [value, setValue] = useState("Batman");
  /*  React.useEffect(() => {
    //pulls json data
    async function getHeroes() {
      const response = await fetch("http://swapi.dev/api/people/");
      const body = await response.json();
      //assigns fetched json data to object
      setItems(
        body.results.map(({ name, gender }) => ({
          label: name,
          value: name,
          gender: gender,
        }))
      );
    }

    getHeroes();
  }, []); */

  React.useEffect(() => {
    function getHeroes() {
      const body = images;
      setItems(
        body.map(({ title, id, hero, description, image }) => ({
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
    }

    getHeroes();
  }, []);

  const heroOptions = new Map([
    ...items.map((item) => [item.heroID, item.hero]),
  ]);

  const filteredHeroes = () => {
    if (!value) {
      return items;
    }
    return items.filter((item) => String(item.value) === value);
  };

  console.log(items);

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
        <HeroSlider slides={filteredHeroes().map((item) => item)} />
      </div>
    </div>
  );
};

const images = [
  {
    id: 1,
    title: "Bruce Wayne",
    description:
      "Sidekick: First appeared in Detective Comics #168 - February 1951",
    image:
      "https://vignette.wikia.nocookie.net/marvel_dc/images/9/9d/Batman_003.jpg/revision/latest?cb=20090114064958",
    hero: { name: "Batman", id: 1 },
  },
  {
    id: 2,
    title: "Azrael",
    description: "First appeared in 1980",
    image:
      "https://i.pinimg.com/236x/77/73/73/7773732abb609502e17656c2e5dbfee7--batman-tattoo-dc-comic.jpg",
    hero: { name: "Batman", id: 1 },
  },
  {
    id: 3,
    title: "Dick Grayson",
    description: "First appeared in 1532",
    image: "https://images-na.ssl-images-amazon.com/images/I/81gPs19EzjL.jpg",
    hero: { name: "Batman", id: 1 },
  },
  {
    id: 4,
    title: "Jason Todd",
    description:
      "Sidekick: First appeared in Detective Comics #168 - February 1951",
    image:
      "https://cdn.mos.cms.futurecdn.net/F6fwMEGACa7gBvJfjKffrg-1200-80.jpg",
    hero: { name: "Batman", id: 1 },
  },

  {
    id: 5,
    title: "Peter Parker",
    description: "First appeared in 2253",
    image:
      "https://i.annihil.us/u/prod/marvel/i/mg/c/50/57aa2d678be0d/clean.jpg",
    hero: { name: "Spiderman", id: 2 },
  },
  {
    id: 6,
    title: "Spidergirl",
    description: "First appeared in 1535",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/501967/501967._SX360_QL80_TTD_.jpg",
    hero: { name: "Spiderman", id: 2 },
  },
  {
    id: 7,
    title: "Spider-Monkey",
    description: "First appeared in 2343",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51QAvGZV24L._SX298_BO1,204,203,200_.jpg",
    hero: { name: "Spiderman", id: 2 },
  },
  {
    id: 8,
    title: "Bruce Banner",
    description: "First appeared in 2343",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/hulkgreatpower2020001_cvr.jpg",
    hero: { name: "Spiderman", id: 2 },
  },
  {
    id: 9,
    title: "Damian Wayne",
    description: "First appeared in 2353",
    image:
      "https://comicvine1.cbsistatic.com/uploads/original/0/40/4629933-rbsobm_cv1_ds.jpg",
    hero: { name: "Batman", id: 1 },
  },
  {
    id: 10,
    title: "Spiderman Noir",
    description: "First appeared in 2343",
    image:
      "https://i.annihil.us/u/prod/marvel/i/mg/5/e0/5bc77a942112a/clean.jpg",
    hero: { name: "Spiderman", id: 2 },
  },
];
const App = () => {
  return (
    <div className="App">
      <SuperheroDropdown />
      {/* <Carousel slides={images} /> */}
      {/* <HeroSlider slides={images} /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
