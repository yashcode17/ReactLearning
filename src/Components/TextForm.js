import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter Text Here');   
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lower case</button>
        </div>
        <div className="container">
            <h1>Your Text Summary:</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
