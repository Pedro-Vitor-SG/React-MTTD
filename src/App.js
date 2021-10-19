import "./App.css";
import JeremyCards from "./components/JeremyCards";

function App(objData) {
  objData = require("./data.json");

  return (
    <div className="App">
      <JeremyCards objData={objData} />
    </div>
  );
}

export default App;
