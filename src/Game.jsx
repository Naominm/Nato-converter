
import {useState} from 'react'

import './Game.css'

function Game(){
  const [UserInput,setUserInput]=useState("");
  const [ConvertedText, setConvertedText] = useState([]);

  const Nato = {
    "A": "alpha",  "B": "bravo",   "C": "charlie", "D": "delta",  "E": "echo",    "F": "foxtrot", "G": "golf",   "H": "hotel",   "I": "india", "J": "juliett","K": "kilo",    "L": "lima","M": "mike", "N":"november","O": "oscar", "P": "papa",   "Q": "quebec",  "R": "romeo", "S": "sierra", "T":"tango",   "U": "uniform", "V": "victor", "W": "whiskey", "X": "x-ray",
    "Y": "yankee", "Z": "zulu","0": "zero", "1": "one", "2": "two", "3": "three",
    "4": "four", "5": "five", "6": "six", "7": "seven","8": "eight", "9": "nine",
    "!": '"exclamation mark"', '"': '"double quote"',"#": '"hash"', "$": '"dollar sign"', "%": '"percent sign"',
    "&":' "ampersand"', "'":' "apostrophe"', "(": '"left parenthesis"', ")": '"right parenthesis"', "*": '"asterisk"', "+": '"plus sign"',
    ",":' "comma"', "-": '"hyphen"', ".": '"period"', "/": '"slash"', ":": '"colon"', ";":' "semicolon"', "<":' "less than"',
    "=": '"equals sign"', ">": '"greater than"', "?": '"question mark"', "@":' "at symbol"', "[": '"left square bracket"', "\\": '"backslash"',
    "]": '"right square bracket"', "^": '"caret"', "_": '"underscore"', "`": '"grave accent"', "{": '"left curly brace"',
    "|": '"vertical bar"', "}": '"right curly brace"', "~": '"tilde"'
  };


  function natoConverter(input){
    let upperCaseText = input.toUpperCase();
    let SplitedText=upperCaseText.split('');

    let ConvertedArray = [];
    for (let i = 0; i < SplitedText.length; i++) {
        let letter = SplitedText[i];
        if (Object.keys(Nato).includes(letter)) {
            ConvertedArray.push(Nato[letter]);
        }
    }
    return ConvertedArray.join('   ');
  }
  function handleChange(e) {
    let value = e.target.value;       
    setUserInput(value);              
    setConvertedText(natoConverter(value));
    
        let convertedArray = natoConverter(value).split('   '); 
        setConvertedText(convertedArray);
        
  }

  return(
    <>
  
    <div className="main-content">
      <h1>NATO Phonetic converter</h1>
        <form className='form'onSubmit={(e) => e.preventDefault()} >
        <div className="userInput">
        <input type="text" onChange={handleChange} value={UserInput} placeholder='Please enter a value to convert'/>
     
        </div>
        </form>
<div className="result-section">
<h2 className='value'>Nato Phonetic Equivalent is:</h2>
<p></p>
<p className='value'>
    {ConvertedText.map((word, index) => ( <span  key={index}   className={index % 2 === 0 ? 'even-color' : 'odd-color'} >
     {word}{' '} </span>
    ))}
</p>

</div>
       
    </div>
    </>
  )
}

export default Game;