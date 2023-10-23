import React, {useState} from 'react'

export default function TextForm(props) {
    
  
  const handleUpClick= ()=>{
      //  console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick= ()=>{
        //  console.log("Uppercase was clicked"+ text);
          let newText=text.toLowerCase();
          setText(newText);
          props.showAlert("Converted to lowercase!","success");
      }
      const clear= ()=>{
        //  console.log("Uppercase was clicked"+ text);
       
       // let new=text.replace(" ");
        setText("");
        props.showAlert("Text Cleared","success");
      }
      const[btntext,setBtnText]=useState("Enable Dark Mode")
      const toggleStyle= ()=>{
        //  console.log("Uppercase was clicked"+ text);
       
       // let new=text.replace(" ");
       props.showAlert("Mode Changed","success");
        if(myStyle.color=='black')
        {
          setMyStyle({
            color:'white',
            backgroundColor:'black',
            border:'1px solid white'
          })
          setBtnText("Enable Light Mode");
        }
        else{
          setMyStyle({
            color:'black',
            backgroundColor:'white'
          })
          setBtnText("Enable Dark Mode");
         
        }
      }
      
    const handleOnChange=(event)=>
    {
       // console.log("On Change");
        setText(event.target.value);
    }
    
    let [text,setText]= useState('');
    const[myStyle, setMyStyle]=useState({
      color:'black',
      backgroundColor:'white'
    
    })

    
    return (
    <>
    <div className="container" style={myStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3" style={myStyle}>
        <textarea className="form-control" style={myStyle} value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div> 
        <button className="btn btn-warning mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-warning mx-1" onClick={clear}>Click to Clear</button>
        <button className="btn btn-warning mx-1" onClick={toggleStyle}>{btntext}</button>
        
    </div>
    <div className="container my-3" style={myStyle}>
        <h3>Your text summary</h3>
        <p>{text.split("").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h2> Preview</h2>
        <p>{text}</p>
    </div>
    </>
      )
}
