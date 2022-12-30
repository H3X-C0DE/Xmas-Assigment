// import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import Comments from "./components/Comments";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
      </header>
      <Comments />
    </div>
  );
}

export default App;
