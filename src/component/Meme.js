import React from "react";
function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemeImages, setAllMemeImages] = React.useState([]);
    React.useEffect(()=>{
            fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>setAllMemeImages(data.data.memes))
    },[])
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const { url } = allMemeImages[randomNumber];
        // setMeme((prevMeme) => ({
        //     ...prevMeme,
        //     image: url,
        // }));
        setMeme((prevMeme) => ({
            topText: "",
            bottomText: "",
                 image: url,
             }))
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }
    return (
        <main className="Meme">
            <div className="form">
                <input
                    type="text"
                    className="form-input"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                ></input>
                <button onClick={getMemeImage} className="form-button">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.image} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
export default Meme;
