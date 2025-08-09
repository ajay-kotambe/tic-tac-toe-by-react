import "./App.css";
import Sqaure from "./components/Board";

function App() {
  return (
    <>
      <ul className="App" style={{listStyleType:"none"}}>
        <li className="board-row">
          <Sqaure index="1" className="sqaures" />
          <Sqaure index="2" className="sqaures" />
          <Sqaure index="3" className="sqaures" />
        </li>
        <li className="board-row">
          <Sqaure index="4" className="sqaures" />
          <Sqaure index="5" className="sqaures" />
          <Sqaure index="6" className="sqaures" />
        </li>
        <li className="board-row">
          <Sqaure index="7" className="sqaures" />
          <Sqaure index="8" className="sqaures" />
          <Sqaure index="9" className="sqaures" />
        </li>
      </ul>
    </>
  );
}

export default App;
