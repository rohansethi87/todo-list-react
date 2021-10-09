import React from "react";
import { useHistory } from "react-router-dom";

const TodoCard = (props) => {
    let history = useHistory();
    const {id, title, completed} = props.todo;
    return (
        <div 
        style={{
            backgroundColor: '#888', 
            maxWidth:'250px', 
            margin: '15px',
            padding: '15pxs'
        }}
        onClick={() => history.push(`/todo/${id}`)}
        >
            <h4>{title}</h4>
            <p>{`Completed ${completed}`}</p>
        </div>
    )
};

export default TodoCard;
