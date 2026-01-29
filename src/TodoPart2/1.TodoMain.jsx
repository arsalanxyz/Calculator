import { useState } from "react";
import AddTodo from "./components/AddTodo.jsx";
import Appname from "./components/Appname.jsx";
import TodoItemscontainer from "./components/TodoItemsContainer.jsx";
import Container from "./components/Container.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

function TodoMain2() {
  const initialTodoItems = [];
  const [todoitems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (newItem, newDate) => {
    const newTodoItemsList = [
      ...todoitems,
      { name: newItem, dueDate: newDate },
    ];
    setTodoItems(newTodoItemsList);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItemsList = todoitems.filter(
      (itm) => itm.name !== todoItemName,
    );
    setTodoItems(newTodoItemsList);
  };
  return (
    <Container>
      <Appname></Appname>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItemscontainer
        TI={todoitems}
        onDeleteItem={handleDeleteItem}
      ></TodoItemscontainer>
    </Container>
  );
}

export default TodoMain2;
