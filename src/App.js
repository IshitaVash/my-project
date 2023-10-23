import React,{ useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode]= useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null); 
    },1500);
  }
  const toggleMode=()=>{
    if(mode=='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title="Edit Text- Darkmode";
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title="Edit Text-Lightmode";
    }
  }
  return(
  <>
  <Router>
      
    <Alert alert={alert}/>
    <div className="container my -5" >
    <Routes>
    <Route path="/about" element={<About />} />
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"mode={mode}/>}/>
      <Route path="/" element={<NavBar mode={mode} toggleMode={toggleMode}/>}/>
    </Routes>
  
    </div>
    </Router> 
  </>
  );
}

export default App;
