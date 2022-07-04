import "./App.css";
import WeatherToday from "./weatherToday/WeatherToday";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container container__app">
        <WeatherToday defaultCity="Lisbon" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
