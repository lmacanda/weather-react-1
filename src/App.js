import "./App.css";
import Today from "./today/Today";
import Searchbar from "./searchbar/Searchbar";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container container__app">
        <Today />
        <Searchbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
