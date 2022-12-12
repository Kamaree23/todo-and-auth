import React, { Component } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './login';
import SignUp from './Signup';
import Todo from './Todo';
import Home from './Home'
import Nav from './Nav'

export default class App extends Component {

  logMeIn = (user) => {
    localStorage.setItem('user', JSON.stringify(user))};

  addMessage = (msg, category) => {
    this.setState({message: {message: msg, category: category}});
  };
  render() {
    return (
      <Router>
        <div>
        <Nav/>
          
          <Routes>

            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login logMeIn={this.logMeIn} addMessage={this.addMessage}/>}/>
            <Route path='/signup'element={<SignUp addMessage={this.addMessage}/>}/>
            <Route path='/todo' element={<Todo />}/>
        
          </Routes>

     

        </div>
      </Router>
    )
  }
}

