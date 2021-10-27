import React from 'react'
import {useState} from 'react';

export const Create = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const todo={title,desc}
        fetch('http://localhost:8000/todos',{
            method:'POST',
            headers:{"content-type":"application/json"},
            body: JSON.stringify(todo)
        }).then(()=>{
            setTitle('');
            setDesc('');
            console.log("New Task Added");
        })

    }
    const handleReset=()=>{
        document.getElementById("form").reset();
    }
    return (
        
        <div className="create">
            <h2>
                Add a new Task
            </h2>
            <form id ="form" onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" required  value={title} onChange={(e)=> setTitle(e.target.value)}></input>
                <label>Description:</label>
                <textarea required value={desc} onChange={(e)=> setDesc(e.target.value)}></textarea>
                <button className="bt">Add</button>
                
            </form>
        </div>
    )
}
export default Create;
