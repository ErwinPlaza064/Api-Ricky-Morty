export default function Character(props) {
  const { characters, setCharacteres, curURL,info ,loadList} = props;

  const {prev,next,pages} = info;
  const resetCharacters = () => {
    setCharacteres(null);
  };

 function currentPage  (){
    const pagesPos = curURL.indexOf('page=');
    if(curURL != null &&  pagesPos > -1){
        return curURL.substring(pagesPos +5) + " / "+pages;

    } 
    return "1 / " + pages;
  }

  const BackHome = () => {
    return (
      <>
        <div className="horizontal-bar">
        
          {prev != null ? (<button onClick={()=>loadList(prev)}> Previews </button>) : ("")}
          <span className="back-home displaySpan" onClick={resetCharacters}>
            {" "}
            Volver a la home{" "}
          </span>
          {next != null ? (<button onClick={()=>loadList(next)}> Next! </button>) : ("")}
          <span className="displaySpan" >{currentPage()}</span>
        </div>
      </>
    );
  };
  return (
    <div className="characters">
      <h1>Personajes</h1>

      <BackHome />

      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p className="text-grey">
                <span>Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-gey">Especie: </span>
                <span>{character.species}</span>
              </p>

<p>
            <span className="text-grey">Gender: </span>
                <span>{character.gender}</span>
                </p>
            </div>
          </div>
        ))}
      </div>

      <BackHome />

    </div>
  );
}
