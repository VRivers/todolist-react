import React from "react";

function TodoItem (props){

    return (
        <div className="todo-item">
        <input 
            type="checkbox" 
            id={props.todoFullData.id} 
            onChange={() => props.handleChange(props.todoFullData.id)} 
            checked={props.todoFullData.completed}/>
        <label htmlFor={props.todoFullData.id}>{props.todoFullData.text}</label>
        </div>
    )
}


export default TodoItem