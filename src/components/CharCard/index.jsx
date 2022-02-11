import "./styles.css";

const CharCard = ({ currentImg, currentName, currentSpecies }) => {
  return (
    <>
      <div className="title-div">
        <h2>{currentName}</h2>
        <h4>Species: {currentSpecies}</h4>
      </div>
      <img
        src={currentImg}
        alt="Personagem do desenho animado Rick and Morty"
      />
    </>
  );
};
export default CharCard;
