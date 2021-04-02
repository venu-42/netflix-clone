import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
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
        <Router>
          <Switch>
            {!user&&<Route path='/' component={LoginScreen} />}
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
