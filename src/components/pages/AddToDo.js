import React from "react"

const AddToDo = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Insira o texto" />
                <br />
                <input type="checkbox"/>
                <div>To Do realizado</div>
            </form>
            <button className="sendtodo" onClick={} >Submeter ToDo</button>
        </div>
    )}

export default AddToDo