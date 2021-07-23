import TodoItem from '../components/TodoItem'
import classes from './TodoList.module.css'
import React, {useState} from 'react'
import Modals from "../Modal/Modals";

const TodoList = ({todos,checkItem, deleteFunction,setTodos,isChecked}) => {
    const [index,setIndex]= useState()
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }



    return (
        <div className={classes.root}>
            {todos?.map((elem, index) => {
                return(

                    <TodoItem
                        isChecked={()=>isChecked(index)}
                        checkItem={()=>checkItem(index)}
                        index={index}
                        editElem={()=>{
                            handleOpen()
                            setIndex(index)

                        }}
                        key={elem + index}
                        text={elem.text}
                        deleteFunction={() => deleteFunction(index)}

                    />
                )
            })}
            <Modals index={index}  open={open} todos={todos} setTodos={setTodos} onClose={handleClose}/>
        </div>
    )
}

export default TodoList
