import React from "react";

function TodoItem (props){

    return (
        <div className="todo-item">
        <input type="checkbox" id="1" checked={props.todoFullData.completed}/>
        <label htmlFor="1">{props.todoFullData.text}</label>
        </div>
    )
}


export default TodoItem