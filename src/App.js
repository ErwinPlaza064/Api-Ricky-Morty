import imageRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Character from './components/Character';

function App() {
  const [characters, setCharacteres] = useState(null);
  const [previewsUrl, setPreviewsUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [info, setInfo] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(null);

  const urlInicial = 'https://rickandmortyapi.com/api/character';
  const reqApi = () =>{
    reqApiFrom(urlInicial);
  };

  const reqApiFrom = async (url) =>{
    console.log(`pidiendo info de :  ${url}`);
    setCurrentUrl(url);
    const api = await fetch(url);
    const characterApi = await api.json();

    console.log(characterApi)

    setInfo(characterApi.info);
    setCharacteres(characterApi.results);
    setPreviewsUrl(characterApi.info.prev);
    setNextUrl(characterApi.info.next);
  };



  return (
    <div className="App">
      <header className="App-header">
    <h1 className='title'>Rick & Morty</h1>
    {characters ?
    (
       <Character characters={characters} setCharacteres={setCharacteres} 
       info = {info}
       curURL = {currentUrl}
       loadList= {reqApiFrom} />
    ) : (
      <>
<img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
    <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
    </>
   )
   }
      </header>
    </div>
  );
};
export default App;
