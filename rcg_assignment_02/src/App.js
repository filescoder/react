import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  };

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    this.setState({userInput: text.join('')});

  }

  render() {   
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch}
        index={index}
        clicked={this.deleteCharHandler.bind(this, index)}/>;
    })
    

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.inputChangedHandler(event)} value={this.state.userInput}></input>
        <p>{this.state.textLength}</p>
        <Validation textLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
