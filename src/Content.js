import React from 'react'
import {useEffect,useState} from 'react';
export const Content = () => {
    const [List,setList] = useState(null);
    const [flag,setFlag]=useState('1')
    useEffect(()=>{
        fetch('http://localhost:8000/todos')
            .then(res =>{
                return res.json();
            }).then(data =>{
                setList(data);
            }).catch(err =>{
                console.log(err.message);
            })
    },[{flag}]);

    const handleDelete = (id) =>{
        console.log(id);
        fetch('http://localhost:8000/todos/'+id,{
            method:'DELETE'
        }).then(()=>{
            setFlag(id);
            console.log("Task Deleted");
        })
    }
    const [style,setStyle]=useState({
        backgroundColor:"white",
    });
    const [bname,setBname]=useState('Dark');
    const handleDark=()=>{
        if(bname==="Dark"){
            setStyle({
                backgroundColor:"black"
            })
            setBname('Light');
        }else{
            setStyle({
                backgroundColor:"white"
            })
            setBname('Dark');
        }
    }
    return (
        <div className="content" style={style}>
          
           {List && 
                List.map(todo=>(
                    
                    <div className="card" key={todo.id}>
                    <div className="card-body">

                        <h4 className="card-title">{todo.title}</h4>
                        <hr />
                        <h6 className="card-text">{todo.desc}</h6>
                        <button className="bt" id={todo.id} onClick={(e)=>handleDelete(todo.id)}>Delete</button>
                    </div>
                    </div>
                    ))
           }
           <button className="bt1" onClick={handleDark}>{bname}</button>
           
        </div>
    )
}
export default Content;
