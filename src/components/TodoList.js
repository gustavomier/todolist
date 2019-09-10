import React from "react";
import { connect } from "react-redux"
import { fetchToDoList, postToDoList } from "../actions"
class ToDoList extends React.Component {
    componentDidMount() {
        this.props.fetchToDoList();
    }
    renderList() {
        return this.props.todos.map(todo => {
            return (
                <div className="item" key={todo.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h4>ID do usuário: {todo.userId}</h4>
                            <h2>{todo.title}</h2>
                            <p> Número da postagem : {todo.id}</p>
                            <p> {todo.completed} </p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}
const mapStateToProps = (state) => {
    return { todos: state.todos };
}
export default connect(
    mapStateToProps,
    { fetchToDoList, postToDoList }
    )(ToDoList);