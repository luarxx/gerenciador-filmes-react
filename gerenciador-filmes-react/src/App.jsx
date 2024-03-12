import "./global.css";
import { Topbar } from "./components/topbar";
import { Mainbody } from "./components/mainbody";
import { Topbanner } from "./components/topbanner";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { Home } from "./pages/home";


function App() {
  return (
    <div className="App">
        <Topbar />
        <Topbanner/>
        <Mainbody>
          <Menu/>
          <Home/>
        </Mainbody>
        <Footer/>
    </div>
  );
}

export default App;
