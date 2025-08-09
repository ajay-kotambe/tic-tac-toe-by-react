import "./Square.css";

export default function Board(props) {
  return <button className={props.className}>{props.index}</button>;
}
