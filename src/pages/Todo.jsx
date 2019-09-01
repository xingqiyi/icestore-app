import React from "react";
import stores from "../stores";
import "../styles.css";

function Todo() {
  const todos = stores.useStore("todos");
  const {dataSource, inited} = todos;

  React.useEffect(() => {
    todos.refresh();
  }, []);

  function onAdd(name) {
    todos.add({name});
  }

  function onRemove(index) {
    todos.remove(index);
  }

  function onCheck(index) {
    todos.toggle(index);
  }

  return (
      <div>
        <h2>Todo</h2>
        {inited ? (
            dataSource.length ? (
                <ul>
                  {dataSource.map(({name, done}, index) => (
                      <li key={index}>
                        <label>
                          <input
                              type="checkbox"
                              checked={done}
                              onClick={() => onCheck(index)}
                          />
                          {done ? <s>{name}</s> : <span>{name}</span>}
                        </label>
                        <button onClick={() => onRemove(index)}>-</button>
                      </li>
                  ))}
                </ul>
            ) : (
                "no task"
            )
        ) : (
            "loading..."
        )}
        <div>
          <input
              onKeyDown={event => {
                if (event.keyCode === 13) {
                  onAdd(event.target.value);
                  event.target.value = "";
                }
              }}
              placeholder="Press Enter"
          />
        </div>
      </div>
  );
}

export default Todo
