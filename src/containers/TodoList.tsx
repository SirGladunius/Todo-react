import TodoItem from "../components/TodoItem";
import classes from "./TodoList.module.css";
import React, { useState } from "react";
import Modals from "../Modal/Modals";
import { Todo } from "../core/types/todo.type";

interface TodoList {
  todos: Todo[];
  checkItem: (index: number) => void;
  deleteFunction: (index: number) => void;
  setTodos: any;
  isChecked: (index: number) => boolean;
}

const TodoList: React.FC<TodoList> = ({
  todos,
  checkItem,
  deleteFunction,
  setTodos,
}) => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      {todos?.map((elem, index) => {
        return (
          <TodoItem
            isChecked={elem.checked}
            checkItem={() => checkItem(index)}
            index={index}
            editElem={() => {
              handleOpen();
              setIndex(index);
            }}
            key={elem.text + index}
            text={elem.text}
            deleteFunction={() => deleteFunction(index)}
          />
        );
      })}
      <Modals
        index={index}
        open={open}
        todos={todos}
        setTodos={setTodos}
        onClose={handleClose}
      />
    </div>
  );
};

export default TodoList;
