import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text')

    function handleOnChange(event) {
        setText(event.target.value)
    }
    function handleUpClick() {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase")
    }
    function handleLoClick() {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase")
    }
    function handleClearClick() {
        let newText = ('')
        setText(newText)
        props.showAlert("Text Cleared")
    }
    function handleCopyClick() {
        var newText = document.getElementById("myBox")
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Text Copied To Clipboard")
    }
    return (
        <>
            <div className="mb-3">
                <h3>
                    <label for="myBox" className="form-label mt-3"
                        style={{
                            color: props.mode == "light" ? 'black' : 'white'
                        }}>{props.heading}</label>
                </h3>
                <textarea value={text} className="form-control" id="myBox" rows="8" onChange={handleOnChange}
                    style={{
                        backgroundColor: props.mode == "light" ? 'white' : 'black',
                        color: props.mode == "light" ? 'black' : 'white'
                        // could have written style={myStyle}; where myStyle is a variable declared before
                    }}></textarea>
            </div>
            <button disabled={text.length==0} type="button" className="btn btn-dark mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
            <button disabled={text.length==0} type="button" className="btn btn-dark mx-1 my-1" onClick={handleLoClick} >Convert to LowerCase</button>
            <button disabled={text.length==0} type="button" className="btn btn-dark mx-1 my-1" onClick={handleClearClick} >Clear text</button>
            <button disabled={text.length==0} type="button" className="btn btn-dark mx-1 my-1" id="myBox" onClick={handleCopyClick} >Copy to clipboard</button>
            <div>
                <h5 className='mt-4'
                    style={{
                        color: props.mode == "light" ? 'black' : 'white'
                    }}>Your text summary :</h5>

                <p
                    style={{
                        color: props.mode == "light" ? 'black' : 'white'
                    }}>{text.split(" ").filter( element => {return element.length!=0}).length} words and {text.length} characters</p>

                <h6 className='mt-4'
                    style={{
                        color: props.mode == "light" ? 'black' : 'white'
                    }}>Preview :</h6>

                <p
                    style={{
                        color: props.mode == "light" ? 'black' : 'white'
                    }}>{text.length==0?"Nothing to preview":text}</p>

            </div>
        </>
    )
}
