import "./global.css";
import { Topbar } from "./components/topbar";
import { Mainbody } from "./components/mainbody";
import { Topbanner } from "./components/topbanner";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";


function App() {
  return (
    <div className="App">
        <Topbar />
        <Topbanner/>
        <Mainbody>
          <Menu/>
        </Mainbody>
        <Footer/>
    </div>
  );
}

export default App;
