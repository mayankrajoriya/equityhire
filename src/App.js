import "./App.css";
import { useEffect } from "react";
import Home from "./components/Home";
import Industry from "./components/Industry";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import {Route,Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Services from "./components/services";
import background from "./video/background.mp4"
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init()
    
  }, [])
  
  return (
    <div className="app">
      <video autoPlay loop muted>
        <source src={background} type="video/mp4"/>
      </video>
      <header className="App-header">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
       <Route path="/industry" element={<Industry/>}/>
      </Routes>
      </header>
      <footer><Footer/></footer>
      
    </div>
  );
}

export default App;
