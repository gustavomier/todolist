import React from "react"

export default class CheckBox extends React.Component{
    constructor() {
      super();
      this.state = {isChecked: false};
      this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
    }
  
    handleChecked () {
      this.setState({isChecked: !this.state.isChecked});
    }
  
    render(){
      var txt;
      if (this.state.isChecked) {
        txt = 'foi'
      } else {
        txt = 'não foi'
      }
  
      // remove () after handleChecked because you need pass 
      // reference to function
      // also add return before <div>
      return <div>
         <input type="checkbox" onChange={ this.handleChecked }/>
         <p>O ToDo {txt} realizado</p>
      </div>
    }
  }