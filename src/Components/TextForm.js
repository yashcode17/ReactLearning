import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter Text Here');   
    
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    return (
        <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}/>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
        </div>
    )
}
