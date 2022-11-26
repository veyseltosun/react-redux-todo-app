import React, {useState}from 'react';
import {useDispatch} from "react-redux"
import {addTodo} from "../redux/actions";



function TodoInput() { 
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("handlesubmit", input);
    if (input){
      dispatch(addTodo(input));
      setInput("");
    }

  }

  return (
    <div>
      <div style={{
        minWidth:"200px"}}>
        <form onSubmit={handleSubmit}>
          <input placeholder='Add your Todo!' type="text" value={input} onChange = {(e) =>setInput(e.target.value)} style={{
              width: "200px",
              height: "50px",
              fontSize: "1rem",
              paddingLeft: "15px",
              borderRadius: "20px 0 0 20px",
              outline: "none",
            }}/>
          <button style={{
              height: "50px",
              width: "75px",
              borderRadius: "0 20px 20px 0",
              backgroundColor: "#d44000",
              fontSize: "1rem",
              color: "white",
              outline: "none",
              cursor:"pointer" ,
            }} onClick={handleSubmit} >
              Add
            </button>
        </form>
      </div>
    </div>
  )
}

export default TodoInput