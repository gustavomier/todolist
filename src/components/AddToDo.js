import React from "react";
import CheckBox from "./Checkbox"

export default class AddToDo extends React.Component {
    state = {term: ""}

    onClickCheckbox = () => {
        console.log(this.checked)
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.term)

        this.setState ({ term: ""})
    }
    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit} className="ui form" >
                <input 
                    type="text" 
                    placeholder="Insira o texto"
                    value={this.state.term} 
                    onChange={e => this.setState({ term: e.target.value })} />
                <br />
                <CheckBox />
            </form>
            <button className="sendtodo" onClick={this.onFormSubmit} >Submeter ToDo</button>
        </div>
        )
    }


}




















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
