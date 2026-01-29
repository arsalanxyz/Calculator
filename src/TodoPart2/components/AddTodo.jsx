import { useState } from "react";
function AddTodo({ onNewItem }) {
  const [newTodoName, setNewTodoName] = useState();
  const [newTodoDate, setNewDate] = useState();

  const handleTodoNameChange = (event) => {
    setNewTodoName(event.target.value);
  };

  const handleTodoDateChange = (event) => {
    setNewDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(newTodoName, newTodoDate);
    setNewTodoName("");
    setNewDate("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Your Todo"
            value={newTodoName}
            onChange={handleTodoNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            placeholder="dd-mm-yyyy"
            value={newTodoDate}
            onChange={handleTodoDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success bt1"
            onClick={handleAddButtonClicked}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
