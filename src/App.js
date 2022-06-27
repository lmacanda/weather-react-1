import "./App.css";
import Today from "./today/Today";
import Searchbar from "./searchbar/Searchbar";

function App() {
  return (
    <div className="container container__app">
      <div className="App">
        <Today />
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
