import CharCard from "../CharCard";

const Characters = ({ characterList,nextPage,previousPage }) => {
  return (
    <>
      <div className="title-div-top">
        <h1>Personagens de Rick and Morty</h1>
        <div className="buttons-div">
          <button onClick={previousPage} className="previous-button">Previous page</button>
          <button onClick={nextPage} className="next-button">Next page</button>
        </div>
      </div>
      <ul>
        {characterList.map((current, index) =>
          current.status === "Alive" ? (
            <li className="char-li" key={current.id}>
              <CharCard
                currentImg={current.image}
                currentSpecies={current.species}
                currentName={current.name}
              />
            </li>
          ) : (
            <li className="char-li-dead" key={current.id}>
              <CharCard
                currentImg={current.image}
                currentSpecies={current.species}
                currentName={current.name}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Characters;
