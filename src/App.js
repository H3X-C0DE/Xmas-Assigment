import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import Comment from "./components/Comment";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <Countdown /> */}
      <Timer />
      <Comment />
    </div>
  );
}

export default App;
