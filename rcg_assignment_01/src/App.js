import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: [
      'Nick',
      'Deli',
      'Ila'
    ]
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: [
        event.target.value,
        'Mimpi',
        'Birba'
      ]
    });
  }

  render() { 
    return (
      <div className="App">
        <UserInput 
          changed={this.changeUsernameHandler}
          currentName={this.state.username[0]}/>
        <UserOutput username={this.state.username[0]}/>
        <UserOutput username={this.state.username[1]}/>
        <UserOutput username={this.state.username[2]}/>
      </div>
    );
  }
}

export default App;
