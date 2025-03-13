import NavBar from "./components/Navbar";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Alfaaz from "./Pages/Alfaaz";
import Gallery from "./Pages/Gallery";
import DebSoc from "./Pages/DebSoc";
import Enigma from "./Pages/Enigma";
import Enarrators from "./Pages/Enarrators";
import Filmski from "./Pages/Filmski";
import MUN from "./Pages/MUN";
import Alpha from "./Pages/Alpha";
import Home from "./Pages/Home";
import Malhar from "./Pages/Malhar";

function App() {

 
  return (
    <Router >
       <Routes>
                <Route path="/" element={<Home />}/>
                
                <Route path="/malhar" element={<Malhar/>}/>
                <Route path="/clubs/Alfaaz" element={<Alfaaz />}/>
                <Route path="/clubs/DebSoc" element={<DebSoc />}/>
                <Route path="/clubs/Enigma" element={<Enigma />}/>
                <Route path="/clubs/Enarrators" element={<Enarrators />}/>
                <Route path="/clubs/Filmski" element={<Filmski />}/>
                <Route path="/clubs/MUN" element={<MUN />}/>
                <Route path="/clubs/Alpha" element={<Alpha />}/>
                <Route path="/event-gallery" element={<Gallery />}/>
                <Route path="*" element={<h1>404! Page not found</h1>}/>
                {/* asterick is for every other page */}
        </Routes>
      
    <div className="App ">
      <header>
        <NavBar />
      </header>   
    </div>
  
    </Router>
  );
}

export default App;