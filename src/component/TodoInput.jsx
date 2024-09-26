import { useState } from "react"

export default function TodoInput(props) {
    const { AddNewTodos, todoValue, setTodoValue } = props;
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter Todo..." />

            <button onClick={() => {
                AddNewTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}
