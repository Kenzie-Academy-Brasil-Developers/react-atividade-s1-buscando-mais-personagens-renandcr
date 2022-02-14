import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(
    `https://rickandmortyapi.com/api/character?page=1`
  );
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  const nextPage = () => {
    setPage(next);
  };

  const previousPage = () => {
    setPage(previous);
  };

  useEffect(() => {
    fetch(`${page}`)
      .then((response) => response.json())
      .then((response) => {
        setNext(response.info.next);
        setPrevious(response.info.prev);
        setCharacterList(response.results);
      })
      .catch((err) => console.log("[Erro]"));
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <Characters
          characterList={characterList}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </header>
    </div>
  );
}

export default App;
