import React from "react";
import { connect } from "react-redux"
import { postToDoList} from "../actions"
import jsonPlaceholder from "../apis/jsonPlaceholder"
import axios from "axios"

class AddToDo extends React.Component {
    state = {
        userId: null,
        text: "",
        completed: false,
        id: 201
    }
 
    onFormSubmit = (event) => {
        event.preventDefault();
        postToDoList(this.title, this.completed, this.id)
        /*todoPronto = {
            userId: 1,
            id: null,
            title: this.state.text,
            completed: this.state.completed
        }

        axios.post("https://jsonplaceholder.typicode.com/todos", todoPronto)*/
        this.setState ({ title: ""})
        
    }

    handleChecked = () => this.setState({completed: !this.state.completed});

    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit} className="ui form" >
                <input 
                    type="text" 
                    placeholder="Insira o texto"
                    value={this.state.title} 
                    onChange={e => this.setState({ title: e.target.value })} />
                <br />
                <label><input type="checkbox" onChange={ this.handleChecked }/> O ToDo {this.state.completed ? 'foi' : 'nao foi'} realizado</label>
            </form>
            <button className="sendtodo" onClick={this.onFormSubmit} >Submeter ToDo</button>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {todos: state.todos}
}
export default connect(
    mapStateToProps,
    { postToDoList }
    )(AddToDo);





















/*import React from "react";
import postToDoList from "../actions"

class AddToDo extends React.Component {
    state = { term: ""};
    
    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };


    renderPoster(){
        return ( 
            <div className="ui segment">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <input 
                                type="text"
                                value={this.state.term} 
                                onChange={e => this.setState({ term: e.target.value})}
                            />
                        </div>
                    </form>
                </div>)
}
        
    render() {
        return (
            <div>{this.renderPoster()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { addtodo: state.addtodo }};

export default AddToDo;*/
