import React from "react";
import { connect } from "react-redux"
import { postToDoList} from "../actions"

class AddToDo extends React.Component {
    state = {
        userId: null,
        title: "",
        completed: false,
        id: 201
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.postToDoList({ 
            id: this.idmais,
            title: this.state.title,
            completed: this.state.completed,
            userId: 1
        });
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
const mapPostToProps = (state) => {
    return {todos: state.todos}
}
export default connect(
    mapPostToProps,
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
