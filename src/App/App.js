import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form} from "react-bootstrap";
import classes from "./App.module.css"
import '../containers/TodoList.module.css'
import TodoItem from "../containers/TodoList";
import TodoList from "../containers/TodoList";
import AddIcon from '@material-ui/icons/Add';
import LocalStorageService from '../LocalStorage/LocalStorage'


function App() {

    console.log(LocalStorageService.getTodos().length)
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState(LocalStorageService.getTodos)
    useEffect(()=>LocalStorageService.setTodos(todos), [todos]);



    const addTodo=()=>{
        setTodos((prevState) => [
            ...prevState,
            {
                text: value,
                checked:false
            }
        ])
        setValue('')

    }
    const deleteFunction=(index)=>{
        let arr = todos.concat()
        arr.splice(index,1)
        setTodos(arr)
    }

    const checkItem = (index) => {
        let arr=todos.concat()
        arr[index].checked = !arr[index].checked
        setTodos(arr)
    }
    const isChecked=(index)=>{
        return todos[index].checked
    }

  return (
      <div className={classes.root}>
          <div className={classes.Header}>Your Tasks</div>
          <div className={classes.TaskList}>

              <TodoList todos={todos} checkItem={checkItem} isChecked={isChecked} deleteFunction={deleteFunction} setTodos={setTodos}/>



          </div>
          <div className={classes.BlockСreature}>
              <input value={value} className={classes.InputTask} onChange={(event) => {setValue(event.target.value)}}/>
              <button className={classes.ButtonTask} onClick={addTodo}>
                  <AddIcon
                      fontSize={"large"}

                  />
              </button>
          </div>
      </div>
  );
}

export default App;
