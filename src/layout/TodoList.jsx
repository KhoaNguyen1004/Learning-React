import React from 'react';
import "./css/ToDoList.css";

const ToDoItem = ({title, description, status}) => {
    return (
        <div className='item'>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
            <div className={`status ${status}`}>{status.toUpperCase()}</div>
            <div className='feature'>
                <div className='btn-edit'>Edit</div>
                <div className='btn-delete'>Delete</div>
            </div>
        </div>
    );
};

export default ToDoItem;