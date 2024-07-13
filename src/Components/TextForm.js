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
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = "";
        setText(newText);
    }
    const handleRealityClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = "";
        setText("Sach Sach Bola Kro!");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" onChange={handleOnChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>CONVERT TO UPPER CASE</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lower case</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleRealityClick}>Reality Text</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='my-3'>Your Text Summary:</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Kuch to likho'}</p>
        </div>
        </>
    )
}
