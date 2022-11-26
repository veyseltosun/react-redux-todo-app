import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_TODO_LIST } from "./types";

export const addTodo = () =>{
    return{
        type:ADD_TODO,
        payload: payload,
    }
}
export const deleteTodo = () =>{
    return{
        type:DELETE_TODO,
        payload: payload,
    }
}
export const toggleTodo = () =>{
    return{
        type:TOGGLE_TODO,
        payload: payload,
    }
}
export const clearTodo = () =>{
    return{
        type:CLEAR_TODO_LIST,
       
    }
}