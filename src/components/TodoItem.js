import classes from './TodoItem.module.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {logDOM} from "@testing-library/react";

    const TodoItem = ({text, deleteFunction, editElem,checkItem,isChecked }) => {
    return (
        <div className={classes.root}>
            <input className={classes.check}
             type="checkbox" onClick={checkItem} id='one' checked={isChecked()}/>

            <div className={classes.text}>{text}</div>

            <div>
                <button className={classes.edit} onClick={ deleteFunction }>
                    <DeleteIcon />
                </button>

                <button className={classes.delete} onClick={editElem}>
                    <EditIcon/>
                </button>
            </div>
        </div>
    )
}

export default TodoItem