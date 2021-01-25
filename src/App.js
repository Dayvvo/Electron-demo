import React, { Component,createContext } from 'react';
import { HashRouter as Router, Switch,Route } from 'react-router-dom';
import Login from "./login";
import Dashboard from "./dashboard";
import './css/model.css'

export const ConstantV = createContext()

class App extends Component {
  state={
    auth:{
      user1:{
        username:'User1',
        password:'password1'
      },
      user2:{
        username:'User2',
        password:'password2'
      },
      user3:{
        username:'User3',
        password:'password3'
      }

    },
    user:null,
    setAuth:(value)=>this.setState({...this.state,user:value})
  }

  render(){
    return (
      <ConstantV.Provider value={this.state}>
          <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
          </Router>
      </ConstantV.Provider>
    );
  }
}

export default App;
