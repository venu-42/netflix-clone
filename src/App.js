import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  const history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch(
          login({
            userId: user.uid,
            email: user.email,
          })
        );
      } else {
        console.log("Not signed in");
        // history.push('/');
        dispatch(logout()); 
      }
    });

    return unsubsribe;
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
