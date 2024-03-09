import { Topbar } from "./components/topbar";
import { Topbanner } from "./components/topbar/topbanner";
import "./global.css";


function App() {
  return (
    <div className="App">
        <Topbar />
        <Topbanner/>
    </div>
  );
}

export default App;
