import React from "react";

export default function TodoItem({todo, removeTask}){
    return(
        <li style={styles.item}>
            {todo.date} -- {todo.hora} -- : {todo.text}
            <button onClick={() => removeTask(todo.id)} style={styles.button}>X</button>
        </li>
    )
}

const styles = {
    item: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "15px"
    },
    button: {
        background: "#FF0000",
        color: "white",
        border: "none",
        padding: "5px",
        cursor: "pointer",
        borderRadius: "4px"
    }
}