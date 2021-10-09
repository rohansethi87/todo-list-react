import React, {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Todo = () => {
    const { id } = useParams();

    const [todoDetails, setTodoDetails] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            const todoInfo = res.data;
            setTodoDetails(todoInfo);
        });
    }, []);

    const {id: todoId, title, completed} = todoDetails;
    return(
        <div>
            <h1>
                {todoDetails?(
                    <div>
                        <h2>{`ID : ${todoId}`}</h2>
                        <h2>{`Title: ${title}`}</h2>
                        <h2>{`Completed: ${completed}`}</h2>
                    </div>
                )
                :<CircularProgress />}
            </h1>
        </div>
    );
};

export default Todo;