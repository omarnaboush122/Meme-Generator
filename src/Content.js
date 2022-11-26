import { useState,useEffect } from "react";

const Content = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "./images/memeimg.png",
  });

  const [allMemes,setAllMemes] = useState({});

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res=> res.json())
    .then(data=> setAllMemes(data.data.memes))
  },[])

  let random = Math.floor(Math.random() * allMemes.length);

  function getMemeImage() {
    setMeme(prevMeme => ({
      ...prevMeme,
      image: allMemes[random].url,
    }));
  }

  function handleChange(e) {
    const {name,value} = e.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <div className="parent">
          <input className="text" type="text" name="topText" value={meme.topText} onChange={handleChange} />
          <input className="text" type="text" name="bottomText" value={meme.bottomText} onChange={handleChange}  />
        </div>
        <input
          onClick={getMemeImage}
          className="submit"
          type="submit"
          value={"Get a new meme Image"}
        />
      </div>
      <div className="meme">
        <img src={meme.image} alt="meme" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Content;
