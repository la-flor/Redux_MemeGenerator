import React from "react";
import './App.css';
import Meme from "./Meme";
import NewMemeForm from "./NewMemeForm";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const memes = useSelector(state => state.memes);
  const dispatch = useDispatch();

  function addMeme(newMeme) {
    dispatch({ type: "ADD_MEME", meme: newMeme });
  }

  function deleteMeme(id) {
    dispatch({ type: "DELETE_MEME", id });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Meme Generator!</h1>
        <NewMemeForm addMeme={addMeme}/>
        <hr />
        <div className="App-MemeList container">
          <div className="row">
            { memes.map(meme => (
              <Meme 
                  key={meme.id}
                  firstLine={meme.firstLine}
                  secondLine={meme.secondLine}
                  image={meme.image}
                  deleteMeme={() => deleteMeme(meme.id)}
              />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
