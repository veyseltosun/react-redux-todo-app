import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_TODO_LIST } from "./types";

export const addTodo = (payload) =>{
    return{
        type:ADD_TODO,
        payload: payload,
    }
}
export const deleteTodo = (payload) =>{
    return{
        type:DELETE_TODO,
        payload: payload,
    }
}
export const toggleTodo = (payload) =>{
    return{
        type:TOGGLE_TODO,
        payload: payload,
    }
}
export const clearTodoList = (payload) =>{
    return{
        type:CLEAR_TODO_LIST,
        payload: payload,
       
    }
}