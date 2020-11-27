import React from "react";
import Navigation from "./components/Navigation";
import SignIn from "./components/SignIn";
import { Route, Switch } from "react-router-dom";
import AddFriend from "./components/AddFriend";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <Navigation />
    <Switch>
      <Route path="/addFriend" render={() => <AddFriend />} />
      <Route path="/signin" render={() => <SignIn />} />
      <PrivateRoute exact path="/protected" component={Friends} />
      <Route
        exact
        path="/"
        render={() => {
          return (
            <div
              style={{
                marginTop: "0px",
                height: "100vh",
                backgroundImage:
                  "url(https://www.rollingstone.com/wp-content/uploads/2019/09/FriendsLead.jpg)",
              }}
            >
              <h1 style={{ margin: "0px" }}>Welcome to my Friends Site</h1>
             
            </div>
          );
        }}
      />
    </Switch>
      

      {/* <Route exact path="/" render={() => <SignIn />} /> */}
    </div>
  );
};

export default App;
