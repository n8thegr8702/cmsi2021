import { useEffect, useState } from "react";
import "./App.css";
import Title from "./Title.js";
import Form from "./Form.js";
import Info from "./Info.js";

export default function App() {
  const [artist, setArtist] = useState("");
  const [data, setData] = useState("");

  //
  useEffect(() => {
    const url = `https://musicbrainz.org/ws/2/work?query=${artist}&fmt=json`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(null));
  }, [artist]);

  return (
    <div className="App">
      <Title text="Michael Jackson's Info" />
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81BXhwCtiKL._SL1500_.jpg"
        alt="MJ"
        width="200"
      />
      <Form setName={setArtist} />
      <Info data={data} />
      <p>
        Background colors are based on MJ's favorite colors. Red, white, gold,
        and black. But black didn't fit the theme of the website imo.
      </p>
    </div>
  );
}
