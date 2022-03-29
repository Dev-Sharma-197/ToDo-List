import React, { useState } from "react";
import List from "./List";
import Footer from "./Footer";

export default function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const submitHandler = (event) => {
    event.preventDefualt();
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((elem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <form onSubmit={submitHandler}>
            <input
              type="text"
              autoComplete="off"
              placeholder="Add an Item"
              value={inputList}
              onChange={itemEvent}
            />
            <button type="submit" disabled={!inputList} onClick={listOfItems}>
              +
            </button>
          </form>
          <div className="items">
            <ol>
              {items.map((value, index) => {
                return (
                  <List
                    key={index}
                    id={index}
                    text={value}
                    onSelect={deleteItems}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
