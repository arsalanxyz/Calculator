import styles from "./Todoitem.module.css";
function TodoItem({ todoName, todoDate, onDeleteItem }) {
  return (
    <div className={`${styles.todoitem} row`}>
      <div className="col-4">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger bt2"
          onClick={() => onDeleteItem(todoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
