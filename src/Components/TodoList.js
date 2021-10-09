import React, {useEffect, useState} from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import TodoCard from "./TodoCard";

const TodoList = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const todoList = res.data
            setTodos(todoList);
        });
    }, []);

    return(
        <> 
        {todos? 
        (
        <div style={{display: 'flex', flexWrap:'wrap'}}>
            {todos.slice(0,10).map((todo) => <TodoCard todo={todo} />)}
        </div>
        )
        : <CircularProgress />}
        </>
    );
};

export default TodoList;