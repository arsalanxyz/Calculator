import TodoItem from "./TodoItem";

function TodoItemscontainer({ TI, onDeleteItem }) {
  return (
    <div class="todo-item">
      {TI.map((x) => (
        <TodoItem
          todoDate={x.dueDate}
          todoName={x.name}
          onDeleteItem={onDeleteItem}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItemscontainer;
