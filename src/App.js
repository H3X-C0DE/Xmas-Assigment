// import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import Comment from "./components/Comment";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
      </header>
      <Comment />
    </div>
  );
}

export default App;
