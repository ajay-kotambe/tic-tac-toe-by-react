// import "./Board.css";
import Square from "./Square";

const Board = () => {
  return (
    <>
      <ul className="board" style={{ listStyleType: "none" }}>
        <li className="board-row">
          <Square index="1" className="squares" />
          <Square index="2" className="squares" />
          <Square index="3" className="squares" />
        </li>
        <li className="board-row">
          <Square index="4" className="squares" />
          <Square index="5" className="squares" />
          <Square index="6" className="squares" />
        </li>
        <li className="board-row">
          <Square index="7" className="squares" />
          <Square index="8" className="squares" />
          <Square index="9" className="squares" />
        </li>
      </ul>

    </>
  );
};

export default Board;
