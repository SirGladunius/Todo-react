import React, {useState} from 'react';
import classes from "./Modals.module.css"
import {Modal} from "@material-ui/core";

function Modals(props: any){
    const [input,setInput]=useState('')

    return (
<Modal open={props.open} className={classes.root} onClose={props.onClose}>
    <div className={classes.used}>
    <input className={classes.InputEdit} onChange={(event)=>setInput(event.target.value) }/>
    <button className={classes.ButtonEdit} onClick={() => {
        const arr = props.todos.concat()
        arr[props.index].text = input
        props.setTodos(arr)
        console.log(localStorage.getItem("arr"))
         setInput('')
        props.onClose()
    }}>Изменить</button>
    <button className={classes.ButtonClose} onClick={props.onClose}>Вернуться</button>
    </div>

</Modal>)

}

export default Modals
