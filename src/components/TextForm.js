import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");

    const onChanges = (event) => {
        setText(event.target.value);
    }

    function noText() {
        document.getElementById("display").innerHTML = "Please Enter Text!";
    }

    function content(content){ 
        document.getElementById("display").innerHTML = "Your Content: <br></br>" + content;
    }

    const upClick = () => {
        if (text) {
            let newText = text.toUpperCase();
            content(newText);
        }
        else {
            noText();
        }
    }

    const lowClick = () => {
        if (text) {
            let newText = text.toLowerCase();
            content(newText);
        }
        else {
            noText();
        }
    }

    const clearClick = () => {
        if (text) {
            let newText = "";
            setText(newText);
            document.getElementById("display").innerHTML = "";
        }
        else {
            noText();
        }
    }

    const copyClick = () => {
        if (text) {
            let newText = text;
            navigator.clipboard.writeText(newText);
        }
        else {
            noText();
        }
    }

    const displayClick = () => {
        if (text) {
            content(text);
        }
        else {
            noText();
        }
    }

    const displayWords = () => {
        if (text) {
            let newText = text.split(" ").length;
            document.getElementById("display").innerHTML = "Number of Words: " + newText + " words";
        }
        else {
            noText();
        }
    }

    const displayLength = () => {
        if (text) {
            let newText = text.length;
            document.getElementById("display").innerHTML = "Length: " + newText + " characters";
        }
        else {
            noText();
        }
    }

    const displaySenLen = () => {
        if (text) {
            let newText = text.split(".").length;
            document.getElementById("display").innerHTML = "Number of Sentences: " + newText + " sentences";
        }
        else {
            noText();
        }
    }

    const displayVowels = () => {
        if (text) {
            let matches = text.match(/[aeiou]/g);
            if (matches) {
                let newText = matches.length;
                document.getElementById("display").innerHTML = "Number of Vowels: " + newText + " vowels";
            }
            else {
                document.getElementById("display").innerHTML = "No Vowels Found!"; 
            }
        }
        else {
            noText();
        }
    }

    const displayConsonants = () => {
        if (text) {
            let matches = text.match(/[bcdfghjklmnpqrstvwxyz]/g);
            if (matches) {
                let newText = matches.length;
                document.getElementById("display").innerHTML = "Number of Consonants: " + newText + " consonants";
            }
            else {
                document.getElementById("display").innerHTML = "No Consonants Found!"; 
            }
        }
    }  

    const displaySpaces = () => {
        if (text) {
            let newText = text.split(" ").length;
            document.getElementById("display").innerHTML = "Number of Spaces: " + newText + " spaces";
        }
        else {
            noText();
        }
    }

    const displaySpecial = () => {
        if (text) {
            let matches = text.match(/[^a-zA-Z0-9 ]/g);
            // setText(newText);
            if (matches) {
                let newText = matches.length;
                document.getElementById("display").innerHTML = "Number of Special Characters: " + newText + " special characters";
            }
            else {
                document.getElementById("display").innerHTML = "No Special Characters Found!";
            }
        }
        else {
            noText();
        }
    }

    const displayNum = () => {
        if (text) {
            let matches = text.match(/[0-9]/g);
            // setText(newText);
            if (matches) {
                let newText = matches.length;
                document.getElementById("display").innerHTML = "Number of Numbers: " + newText + " numbers"; 
            }
            else {
                document.getElementById("display").innerHTML = "No Numbers Found!"; 
            }
        }
        else {
            noText();
        }
    }

    const displayPunc = () => {
        if (text) {
            let matches = text.match(/[.,/#!$%^&*;:{}=\-_`~()]/g);
            if (matches) {
                let newText = matches.length;
                document.getElementById("display").innerHTML = "Number of Punctuation Marks: " + newText + " punctuation marks";
            }
            else {
                document.getElementById("display").innerHTML = "No Punctuation Marks Found!"; 
            }
        }
        else {
            noText();
        }
    }

    const readTime = () => {
        if (text) {
            let newText = 0.008 * text.split(" ").length;
            document.getElementById("display").innerHTML = "Time to Read the Content: <br></br>" + newText + " minutes";
        }
        else {
            noText();
        }
    }

    const extraSpaces = () => {
        if (text) {
            let newText = text.split(/[ ]+/);
            // setText(newText.join(" "));
            content(newText);
        }
        else {
            noText();
        }
    }

    const removeSpaces = () => {
        if (text) {
            let newText = text.split(" ").join("");
            // setText(newText);
            content(newText);
        }
        else {
            noText();
        }
    }

    const removePunc = () => {
        if (text) {
            let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
            // setText(newText);
            content(newText);
        }
        else {
            noText();
        }
    }

    const removeSpecial = () => {
        if (text) {
            let newText = text.replace(/[^a-zA-Z0-9 ]/g,"");
            // setText(newText);
            content(newText);
        }
        else {
            noText();
        }
    }

    const removeVowels = () => {
        if (text) {
            let newText = text.replace(/[aeiou]/g,"");
            // setText(newText);
            content(newText);
        }
        else {
            noText();
        }
    }

    const removeConsonants = () => {
        if (text) {
            let newText = text.replace(/[bcdfghjklmnpqrstvwxyz]/g,"");
            // setText(newText);
            content(newText);
        }
        else {
            noText();
        }
    }  

    const removeNum = () => {
        if (text) {
            let newText = text.replace(/[0-9]/g,"");
            // setText(newText);
            content(newText);
        }
        else {
            noText();
        }
    }

    // const listen = () => {
    //     let msg = new SpeechSynthesisUtterance();
    //     msg.text = text;
    //     window.speechSynthesis.speak(msg);
    // }

    const inverseClick = () => {
        if (text) {
            let newText = text.split("").reverse().join("");
            // setText(newText);
            content(newText);
        }
        else {
            noText();
        }
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
    function githubLink() {
        window.open("https://github.com/iamjatin-g");
    }
    function linkedinLink() {
        window.open("https://www.linkedin.com/in/iamjatin-g");
    }
    function twitterLink() {
        window.open("https://x.com/iamjatin_g");
    }
  return (
      <>
        <div className="form-group mx-5 my-3">
            <h5 style={{cursor: "default", fontFamily: "Comfortaa", fontWeight: "700"}}>Enter your Text:</h5>
              <textarea className={`form-control my-3 bg-${props.mode}`} style={{color: props.mode === 'light'?'black':'white', resize: "none", fontFamily: "Comfortaa"}} rows="18" value={text} onChange={onChanges}></textarea>
        </div>
        <div className="d-flex justify-content-evenly flex-wrap mx-5 my-1">
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayClick} title="Display Content">
                <i className="fa-regular fa-file-lines me-2"></i>Display
            </button>
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
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayLength} title="Display Length">
                <i className="fa-solid fa-text-height me-2"></i>Length
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayWords} title="Display Words">
                <i className="fa-regular fa-file-word me-2"></i>Words
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={readTime} title="Time to Read">
                <i className="fa-regular fa-clock me-2"></i>Time
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={inverseClick} title="Reverse Content">
                <i className="fa-solid fa-clock-rotate-left me-2"></i>Reverse
            </button>
            {/* <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} title="Listen">
                <i className="fa-solid fa-headphones me-2"></i>Listen
            </button> */}
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displaySenLen} title="Display Sentences">
                <i className="fa-solid fa-strikethrough me-2"></i>Sentences
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={extraSpaces} title="Remove Extra Spaces">
                <i className="fa-solid fa-text-width me-2"></i>Extra Spaces
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayConsonants} title="Display Consonants">
                <i className="fa-regular fa-copyright me-2"></i>Consonants
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={displayPunc} title="Display Punctuations">
                <i className="fa-brands fa-product-hunt me-2"></i>Punctuations
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
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={removeNum} title="Remove Numbers">
                <i className="fa-solid fa-cruzeiro-sign me-2"></i>Remove Numbers
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={removeConsonants} title="Remove Consonants">
                <i className="fa-brands fa-creative-commons-pd me-2"></i>Remove Consonants
            </button>
            <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={removePunc} title="Remove Punctuations">
                <i className="fa-solid fa-hashtag me-2"></i>Remove Punctuations
            </button>
        </div>
        <div className="form-group mx-5 my-3">
            <span id="display" className={`form-control my-3 bg-${props.mode}`} style={{color: props.mode === 'light'?'black':'white', height: "300px", fontFamily: "Comfortaa"}}></span>
        </div>
        <footer className="mt-5 text-center">
            <p style={{cursor: "default", fontFamily: "Comfortaa", fontWeight: "700"}}>Copyright &copy; 2024</p>
            <p style={{cursor: "default", fontFamily: "Comfortaa", fontWeight: "700"}}>Developed by Jatin Ghind</p>
            <div className="m-4">
                <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={githubLink} title="Reverse Content">
                    <i className="fa-brands fa-github"></i>
                </button>
                <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={linkedinLink} title="Reverse Content">
                    <i className="fa-brands fa-linkedin"></i>
                </button>
                <button className={`btn btn-outline-${props.btnMode} m-1 my-2`} onClick={twitterLink} title="Reverse Content">
                    <i className="fa-brands fa-twitter"></i>
                </button>
            </div> 
        </footer>
      </>
  )
}

