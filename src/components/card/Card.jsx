import React from "react";
import "./Card.css";
import { Delete, Edit } from "../../layout/Feature";

const TodoCard = ({title, description, status}) => {
    return (
        <div className="item">
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
            <div className={`status ${status}`}>{status.toUpperCase()}</div>
            <div className='feature'>
                <Edit/>
                <Delete/>
            </div>
        </div>
    );
};

export default TodoCard;