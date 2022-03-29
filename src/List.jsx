import React, { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function List(props) {
  const [state, setState] = useState("true");
  const lineThrough = () => {
    if (state) setState(false);
    else setState(true);
  };
  return (
    <div className="todo_style">
      <DeleteForeverIcon
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id);
        }}
      />

      <li
        onClick={lineThrough}
        style={{ textDecoration: state ? "none" : "line-through" }}
      >
        {props.text}
      </li>
    </div>
  );
}
