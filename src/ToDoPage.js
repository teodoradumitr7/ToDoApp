import React from "react";
import { useState, useEffect } from "react";

export function ToDoPage() {
  let [toDos, setToDos] = useState([]);
  let [toDo, setToDo] = useState("");
  let [toDoRemove, setToDoRemove] = useState("");
  function addTodo() {
    setToDos([toDo, ...toDos]);
    console.log(toDos);
  }

  function removeToDo() {
    setToDos(toDos.filter((s) => s !== toDoRemove));
  }

  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-6">
          <label htmlFor="toDo">ToDo: </label>
          <input
            type="text"
            placeholder="toDo"
            onChange={(e) => setToDo(e.target.value)}
            value={toDo}
            className="m-4"
          ></input>
          <button id="addToDo" onClick={addTodo} className="btn btn-primary">
            Add toDo
          </button>
        </div>
        
        <div className="col-6">
          <label htmlFor="removeToDo">Remove ToDo: </label>
          <input
            type="text"
            placeholder="removeToDo"
            onChange={(e) => setToDoRemove(e.target.value)}
            value={toDoRemove}
            className="m-4"
          ></input>
          <button
            id="removeToDo"
            onClick={removeToDo}
            className="btn btn-primary"
          >
            Remove toDo
          </button>
        </div>
        </div>
      </div>
      <div>
        {toDos.map((row, index) => (
          <tr>
            <td>{index}</td>
            <td>{row}</td>
          </tr>
        ))}
      </div>
    </>
  );
}
