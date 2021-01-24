import React, { Component,createContext } from 'react';
import { HashRouter, Switch,Route } from 'react-router-dom';
import Login from "./login";
import Dashboard from "./dashboard";
export const ConstantV = createContext()

class App extends Component {
  state={
    auth:{
        username:'User1',
        password:'password1'
    },
    isAuthenticated:null,
    setAuth:(value=true)=>this.setState({...this.state,isAuthenticated:value})
  }

  render(){
    return (
      <ConstantV.Provider value={this.state}>
          <HashRouter>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
          </HashRouter>
      </ConstantV.Provider>
    );
  }
}

export default App;
