import React from 'react'
import {deleteTodo, toggleTodo} from "../redux/actions";
import {useSelector, useDispatch} from "react-redux";
import okLogo from "../assets/ok.png";
import deleteLogo from"../assets/delete.png";

function TodoITem({completed, text, id}) {
    const dispatch = useDispatch();
    const handleToggle = () =>{
        dispatch(toggleTodo(id));
    }
    const handleDelete = () =>{
        dispatch(deleteTodo(id));
    }

    const styled = {
        textDecoration: completed ? "line-through" : "none",
        backgroundColor: completed ? "#A9A9A9" : "orange",
        borderRadious: "20px",
    }
   
  return (
    <div style={styled} className="todoList">
        <h4
          style={{
            width:"75%",
            display:"flex",
            justifyContent:"center",
            alignItem:"center",
          }}>{text}</h4>

        <div >
            <span>
                <img 
                 src={okLogo}
                 style={{
                    width:"40px",
                    magin:"10px",
                    cursor:"pointer",}} onClick={handleToggle} alt="ok logo"></img>
            </span>
            <span>
                <img src={deleteLogo} style={{
                    width:"40px",
                    margin: "10px",
                    cursor:'pointer',
                }} alt="delete logo" onClick={handleDelete}></img>
            </span>
        </div>


    </div>
  )
}

export default TodoITem