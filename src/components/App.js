import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import ToDoList from "./TodoList"
import AddToDo from "./AddToDo"
import Header from "./Header"


const App = () => {
   
    return( 
        <div>
            <BrowserRouter>
                <div className="ui container">
                    <Header />
                    <Route path="/" exact component={ToDoList} />
                    <Route path="/addtodo" exact component={AddToDo} />
                </div>
            </BrowserRouter>
        </div>
        );
        }

export default App;