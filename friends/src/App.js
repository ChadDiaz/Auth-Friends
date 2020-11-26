import React from 'react';
import Navigation from './components/Navigation';
import SignIn from './components/SignIn';
import { Switch, Route } from 'react-router-dom'
import AddFriend from './components/AddFriend';


const App = () => {
  return (
    <div className="App">
      <Navigation /> 
      <Switch>
        <Route path='/addFriend' render={() => <AddFriend/> }/>
        <Route path='/signin' render={() => <SignIn />}/>
        <Route exact path='/' render={() => <SignIn />}/>
      </Switch>
      
    </div>
  );
}

export default App;
