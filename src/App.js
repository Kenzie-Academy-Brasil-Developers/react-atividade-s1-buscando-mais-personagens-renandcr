import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1) 
  console.log(characterList);


   const nextPage = () => {
    setPage(page + 1)
  }
  const previousPage = () => {
    page > 1 && setPage(page - 1)
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      // .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList} nextPage={nextPage} previousPage={previousPage}/>
      </header>
    </div>
  );
}

export default App;
