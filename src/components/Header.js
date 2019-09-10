import React from "react"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <div className="ui secondary pointing menu">
        <Link to="/" className="item">Lista de To Dos</Link>
        <div>
            <Link to="/addtodo" className="item">
                Adicionar ToDo
            </Link>
        </div>
    </div>
    )}

export default Header