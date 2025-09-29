import React, { useState} from "react";
import TodoList from "./components/TodoList"

// Componente principal
export default function App() {
  // Variavel de estado que armazenara todas as atividades
  const [todos, setTodos] = useState([]); //[] Indica um array
  const [visivel, setVisivel] = useState()

  // Variavel de estado relativo a tarefa
  const [newTask, setNewTask] = useState("");
  // Variavel de estado relativo a Data
  const [dataDia, setDataDia] = useState("");
  // Variavel de estado relativo a Hora
  const [hora, setHora] = useState("");

  // Função adiciona uma tarefa na lista
  const addTask = () => {
    if (newTask.trim() === "") return;

    // Objeto que representa a tarefa
    const newTodo = {
      id: Date.now(), // Id unico baseado na data e hora atual
      text: newTask,
      date: dataDia,
      hora: hora,
    };

    // Coloca a nova tarefa no array que as armazena
    setTodos([...todos, newTodo]);

    // Limpar as variaveis de estado
    setNewTask("");
    setDataDia("");
    setHora("");
  };

  // Função que remove as tarefas pelo id
  const removeTask = (id) => {
    // Filtra os todos em que o id não seja igual ao id a ser deletado e os atribua novamente ao array
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //função que esconde a lista
  const showList = () => {
    setVisivel(!visivel)
  }

  return (
    <div style={styles.container}>
      <h1>To do List</h1>

      <div style={styles.container}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>Adicionar</button>
        <button onClick={showList} style={styles.button}>lista</button>
      </div>

      <div marginTop= "20px">
        <input 
        type="time"
        placeholder=""
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        style={styles.inputdh}
        />
      
        <input
        type="date"
        placeholder="Digite/escolha uma data"
        value={dataDia}
        onChange={(e) => setDataDia(e.target.value)}
        style={styles.inputdh}
        />

      </div>
      
      <div style={{
        height: "500px",
        overflowY: "scroll",
        border: "1px solid #ccc",
        padding: "10px",
        marginTop: "20px",
        borderRadius: "20px"
      }}> 
        {visivel && <TodoList todos={todos} removeTask={removeTask} />}
      </div>
     
    </div>
  );

}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  inputdh: {
    padding: "10px",
    width: "39%",
    marginRight: "5px",
    borderRadius: "10px"
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "5px",
  },
  button: {
    padding: "10px",
    cursor: "pointer"
  }
}

