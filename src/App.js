import React, { useState} from "react";
import TodoList from "./components/TodoList"

// Componente principal
export default function App() {
  // Variavel de estado que armazenara todas as atividades
  const [todos, setTodos] = useState([]); //[] Indica um array

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

  return (
    <div className="App">
      <h1>To do List</h1>

      <div>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <div>
        <TodoList todos={todos} removeTask={removeTask} />
      </div>
    </div>
  );


}
