import "./global.css";
import { Topbar } from "./components/topbar";
import { Mainbody } from "./components/mainbody";
import { Topbanner } from "./components/topbanner";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { Home } from "./pages/home";
import { Filmes } from "./pages/filmes";
import { Actors } from "./pages/actors";
import { Routes, Route } from "react-router-dom";
import { Directors } from "./pages/directors";


function App() {
  return (
    <div className="App">
        <Topbar />
        <Topbanner/>
        <Mainbody>
          <Menu/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filmes" element={<Filmes/>}/>
            <Route path="/diretores" element={<Directors/>}/>
            <Route path="/atores" element={<Actors/>}/>
          </Routes>
        </Mainbody>
        <Footer/>
    </div>
  );
}

export default App;
