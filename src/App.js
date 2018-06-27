import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link,Switch } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import List from './List.js';
import People from './People.js';
import About from './About.js';
import Auth from './Auth.js';

class App extends Component {

  constructor(){
      super()
      this.state ={ logedIn : false}
  }

  btnMsg(){

    if(this.state.logedIn){
      return <button onClick= { () => {this.setState({logedIn: false}) } }>Log out</button>    
    }else{
      return <button onClick= { () => {this.setState({logedIn: true}) } }> Log In </button>  
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Router>
          <div>
            <nav>
              <Link to="/people/0"><button> People</button></Link>
              <Link to="/about"><button>About</button></Link>
              <Link to="/"><button> Home</button></Link>
              { this.btnMsg() }
            </nav>
            <Switch>  
              <Route path="/people/:id" render={  (props)=> <People {...props} isLoged ={this.state.logedIn}/>   } /> 
              <Route path="/about" component={About} /> 
              <Route path="/" component={List} /> 
            </Switch> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
