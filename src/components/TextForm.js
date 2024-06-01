import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");

    const onChanges = (event) => {
        setText(event.target.value);
    }

    const upClick = () => {
        let newText = text.toUpperCase();
        // setText(newText);
        content(newText);
    }

    const lowClick = () => {
        let newText = text.toLowerCase();
        // setText(newText);
        content(newText);
    }

    const clearClick = () => {
        let newText = "";
        setText(newText);
        document.getElementById("display").innerHTML = "";
    }

    const copyClick = () => {
        let newText = text;
        navigator.clipboard.writeText(newText);
    }

    const displayClick = () => {
        content(text);
    }

    const displayWords = () => {
        let newText = text.split(" ").length;
        document.getElementById("display").innerHTML = "Number of Words: " + newText + " words";
    }

    const displayLength = () => {
        let newText = text.length;
        document.getElementById("display").innerHTML = "Length: " + newText + " characters";
    }

    const displaySenLen = () => {
        let newText = text.split(".").length;
        document.getElementById("display").innerHTML = "Number of Sentences: " + newText + " sentences";
    }

    const displayVowels = () => {
        let newText = text.match(/[aeiou]/g).length;
        document.getElementById("display").innerHTML = "Number of Vowels: " + newText + " vowels";
    }

    const displayConsonants = () => {
        let newText = text.match(/[bcdfghjklmnpqrstvwxyz]/g).length;
        document.getElementById("display").innerHTML = "Number of Consonants: " + newText + " consonants";
    }  

    const displaySpaces = () => {
        let newText = text.split(" ").length;
        document.getElementById("display").innerHTML = "Number of Spaces: " + newText + " spaces";
    }

    const displaySpecial = () => {
        let newText = text.match(/[^a-zA-Z0-9 ]/g).length;
        // setText(newText);
        document.getElementById("display").innerHTML = "Number of Special Characters: " + newText + " special characters";
    }

    const displayNum = () => {
        let newText = text.match(/[0-9]/g).length;
        // setText(newText);
        if (newText>0) {
           document.getElementById("display").innerHTML = "Number of Numbers: " + newText + " numbers"; 
        }
        else {
            document.getElementById("display").innerHTML = "No Numbers Found!"; 
        }
    }

    const displayPunc = () => {
        let newText = text.match(/[.,/#!$%^&*;:{}=\-_`~()]/g).length;
        // setText(newText);
        document.getElementById("display").innerHTML = "Number of Punctuation Marks: " + newText + " punctuation marks";
    }

    const readTime = () => {
        let newText = 0.008 * text.split(" ").length;
        document.getElementById("display").innerHTML = "Time to Read the Content: <br></br>" + newText + " minutes";
    }

    const extraSpaces = () => {
        let newText = text.split(/[ ]+/);
        // setText(newText.join(" "));
        content(newText);
    }

    const removeSpaces = () => {
        let newText = text.split(" ").join("");
        // setText(newText);
        content(newText);

    }

    const removePunc = () => {
        let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
        // setText(newText);
        content(newText);
    }

    const removeSpecial = () => {
        let newText = text.replace(/[^a-zA-Z0-9 ]/g,"");
        // setText(newText);
        content(newText);
    }

    const removeVowels = () => {
        let newText = text.replace(/[aeiou]/g,"");
        // setText(newText);
        content(newText);
    }

    const removeConsonants = () => {
        let newText = text.replace(/[bcdfghjklmnpqrstvwxyz]/g,"");
        // setText(newText);
        content(newText);
    }  

    const removeNum = () => {
        let newText = text.replace(/[0-9]/g,"");
        // setText(newText);
        content(newText);
    }

    // const listen = () => {
    //     let msg = new SpeechSynthesisUtterance();
    //     msg.text = text;
    //     window.speechSynthesis.speak(msg);
    // }

    const inverseClick = () => {
        let newText = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i];
        }
        // setText(newText);
        content(newText);
    }

    function content(content){ 
        document.getElementById("display").innerHTML = "Your Content: <br></br>" + content;
    }

    // const [fWord, findWord] = useState("");
    // const [rWord, replaceWord] = useState("");

    // const findChange = (event) => {
    //     findWord(event.target.value);
    // };
    // const replaceChange = (event) => {
    //     console.log(replaceWord(event.target.value)) ;
    // };
    // const replaceClick = () => {
    //     let newText = text.replaceAll(fWord,rWord);
    //     setText(newText);
    // };
  return (
      <>
        <div className="form-group mx-5 my-3">
            <h5>Enter your Text:</h5>
              <textarea className={`form-control my-3 bg-${props.mode}`} style={{color: props.mode === 'light'?'black':'white'}} rows="18" value={text} onChange={onChanges}></textarea>
        </div>
        <div className="d-flex justify-content-evenly flex-wrap mx-5 my-1">
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={upClick} title="Upper Case">
                  <i className="fa-solid fa-angle-up me-2"></i>Capital
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={lowClick} title="Lower Case">
                <i className="fa-solid fa-angle-down me-2"></i>Small
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={clearClick} title="Clear">
                <i className="fa-solid fa-minus me-2"></i>Clear
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={copyClick} title="Copy">
                <i className="fa-regular fa-clipboard me-2"></i>Copy
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayClick} title="Display Content">
                <i className="fa-regular fa-file-lines me-2"></i>Display
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayLength} title="Display Length">
                <i className="fa-solid fa-text-height me-2"></i>Length
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayWords} title="Display Words">
                <i className="fa-regular fa-file-word me-2"></i>Words
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={readTime} title="Time to Read">
                <i className="fa-regular fa-clock me-2"></i>Time
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} title="Listen">
                <i className="fa-solid fa-headphones me-2"></i>Listen
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displaySenLen} title="Display Sentences">
                <i className="fa-solid fa-strikethrough me-2"></i>Sentences
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={extraSpaces} title="Remove Extra Spaces">
                <i className="fa-solid fa-text-width me-2"></i>Extra Spaces
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayPunc} title="Display Punctuations">
                <i className="fa-brands fa-product-hunt me-2"></i>Punctuations
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayConsonants} title="Display Consonants">
                <i className="fa-regular fa-copyright me-2"></i>Consonants
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayVowels} title="Display Vowels">
                <i className="fa-brands fa-vimeo-v me-2"></i>Vowels
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={removeVowels} title="Remove Vowels">
                <i className="fa-brands fa-viacoin me-2"></i>Remove Vowels
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displaySpaces} title="Display Spaces">
                <i className="fa-regular fa-square me-2"></i>Spaces
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={removeSpaces} title="Remove Spaces">
                <i className="fa-solid fa-square me-2"></i>Remove Spaces
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displaySpecial} title="Display Special">
                <i className="fa-solid fa-dollar me-2"></i>Special
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={removeSpecial} title="Remove Special">
                <i className="fa-brands fa-creative-commons-nc me-2"></i>Remove Special
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayNum} title="Display Numbers">
                <i className="fa-brands fa-creative-commons-zero me-2"></i>Numbers
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={inverseClick} title="Reverse Content">
                <i className="fa-solid fa-clock-rotate-left me-2"></i>Reverse
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={removeConsonants} title="Remove Consonants">
                <i className="fa-brands fa-creative-commons-pd me-2"></i>Remove Consonants
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={removeNum} title="Remove Numbers">
                <i className="fa-solid fa-cruzeiro-sign me-2"></i>Remove Numbers
            </button>
            
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={removePunc} title="Remove Punctuations">
                <i className="fa-solid fa-hashtag me-2"></i>Remove Punctuations
            </button>
        </div>
        <div className="d-flex"><span id="display" className='mx-5 my-3 mb-5'></span></div>
        <footer className="mt-5 text-center">
            <p>Copyright &copy; 2024</p>
            <p>Developed by  <a href="/" target="_blank" rel="noreferrer">Jatin</a></p>
            <p><a href="/" target="_blank" rel="noreferrer">Github Repo</a></p>
            <div className="mt-5 text-center">
                <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
        </footer>
      </>
  )
}

