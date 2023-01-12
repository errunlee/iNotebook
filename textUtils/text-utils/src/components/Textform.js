import React, { useState } from 'react'
import Alert from './Alert';
export default function Textform(props) {
    let [text, setText] = useState("");
    let [btnText, setBtnText] = useState("Copy text")
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText);
        setBtnText('Copy text')
        props.showAlert('Converted to Uppercase')
    }
    const handleChange = (e) => {
        setText(e.target.value);
        setBtnText('Copy text')
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText);
        setBtnText('Copy text')
        props.showAlert('Converted to Lowercase')
    }
    const handleClear = () => {
        let newText = ''
        setText(newText);
        setBtnText('Copy text')
        props.showAlert('Cleared Successfully')
    }
    const handleEmailClick = () => {
        let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        if (newText) {
            setText(newText.join('\n'))
        }
        else {
            setText('')
        }
        setBtnText('Copy text')
        props.showAlert('Successfully filtered email/s')
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setBtnText('Copied to clipboard')
        props.showAlert('Copied text successfully')
    }
    const darkText = { color: 'black' }
    const lightText = { color: 'white' }

    return (
        <>
            <div className='container'  >
                <h1 className='display-6 text-center' style={props.mode === 'dark' ? lightText : darkText}>Enter the text to analyze below.</h1>
                <div className="my-3 position-relative">
                    {props.alertMsg && <Alert message={props.alertMsg} />}
                    <textarea style={props.mode === 'dark' ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }} className={`form-control mb-2 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange}></textarea>
                    <button className="btn btn-secondary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-secondary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn btn-secondary mx-1 my-1" onClick={handleEmailClick}>Purify Emails</button>
                    <button className="btn btn-secondary mx-1 my-1" onClick={handleClear}>Clear Screen</button>
                    <button id='copy' className="btn btn-secondary mx-1" onClick={handleCopy} >{btnText}</button>
                </div>
            </div>
            <div className="container my-3" style={props.mode === 'dark' ? lightText : darkText} >
                <h1 className='lead' style={props.mode === 'dark' ? lightText : darkText}>Your text summary</h1>
                <p> <span className='display-6' style={props.mode === 'dark' ? lightText : darkText}>{text.split(' ').filter(word=>word!=='').length}</span> words, <span className='display-6'>{text.length}</span>characters</p>
                <p >Average time to read the above text : {text.split(' ').filter(word=>word!=='').length / 125} minutes</p>
                <h2 id='preview'>Preview:</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

