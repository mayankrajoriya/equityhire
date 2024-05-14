import "./App.css";
import Home from "./components/Home";
import Industry from "./components/Industry";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import {Route,Routes} from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
       <Route path="/industry" element={<Industry/>}/>
      </Routes>
      </header>
      <footer><Footer/></footer>
      
    </div>
  );
}

export default App;
