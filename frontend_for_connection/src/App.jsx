import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [jokes, SetJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        SetJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <div>
        <h1>The jokes are this</h1>
        <p>Jokes : {jokes.length} </p>
        {jokes.map((jokes, index) => (
          <div key={jokes.id}>
            <p>{jokes.id}</p>

            <p>{jokes.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
