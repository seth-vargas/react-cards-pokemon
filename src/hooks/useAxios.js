import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

export default function useAxios(
  url = "https://pokeapi.co/api/v2/pokemon/",
  name = null
) {
  const [cards, setCards] = useState([]);

  async function addCard() {
    console.log("getting card");
    if (name != null) {
      url = url + name;
    }
    console.log(url);
    const response = await axios.get(url);
    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  }
  return [cards, addCard];
}
