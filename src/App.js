import "./App.css";
import Today from "./today/Today";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container container__app">
        <Today defaultCity="Lisbon" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
