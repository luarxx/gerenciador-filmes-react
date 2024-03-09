import { Topbar } from "./components/topbar";
import { Mainbody } from "./components/topbar/mainbody";
import { Topbanner } from "./components/topbar/topbanner";
import "./global.css";


function App() {
  return (
    <div className="App">
        <Topbar />
        <Topbanner/>
        <Mainbody/>
    </div>
  );
}

export default App;
