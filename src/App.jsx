import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./src/Components/Header";

function App() {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--9jr8l4gmlhmp.code.run/"
        );
        setData(response.data);
        setisLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.reponse);
      }
    };
    getData();
  }, []);
  return (
    <>
      {isLoading ? (
        <span>🐛En cours de chargement...🐛</span>
      ) : (
        <>
          <h2>{data.restaurant.name}</h2>
          img={data.restaurant.picture}
          <p>{data.restaurant.description}</p>
        </>
      )}
    </>
  );
}

export default App;
