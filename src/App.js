import logo from "./logo.svg";
import "./App.css";
// import Countdown from "./components/Countdown";
import Timer from "./components/Timer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <Countdown /> */}
      <Timer />
    </div>
  );
}

export default App;
