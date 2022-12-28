import React, {useState}from 'react'

export default function Textform() {
    let [text,setText]=useState("");
    let [btnText,setBtnText]=useState("Copy text")
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText);
        setBtnText('Copy text')
    }
    const handleChange=(e)=>{
        setText(e.target.value);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText);
        setBtnText('Copy text')
    }
    const handleClear=()=>{
        let newText=''
        setText(newText);
        setBtnText('Copy text')
    }
    const handleEmailClick=()=>{
        let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        if(newText){
            setText(newText.join('\n'))
        }
        else{
            setText('')
        }
        setBtnText('Copied to clipboard')

    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        setBtnText('Copied to clipboard')
    }
  return (
   <>
    <div className='container'>
        <h1 className='display-6 text-center'>Enter the text to analyze below.</h1>
      <div className="my-3">
  <textarea className="form-control mb-2" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange}></textarea>
  <button className="btn btn-secondary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-secondary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-secondary mx-1" onClick={handleEmailClick}>Purify Emails</button>
  <button className="btn btn-secondary mx-1" onClick={handleClear}>Clear Screen</button>
  <button id='copy' className="btn btn-secondary mx-1" onClick={handleCopy} >{btnText}</button>
</div>
    </div>
    <div className="container my-3">
        <h1 className='lead'>Your text summary</h1>
        <p> <span className='display-6'>{text.split(" ").length-1}</span> words, <span className='display-6'>{text.length}</span>characters</p>
        <p>Average time to read the above text : {text.split(" ").length/125} minutes</p>
        <h2>Preview:</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
