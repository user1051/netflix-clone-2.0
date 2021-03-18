import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginScreen from './LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen';

function App() {

  const user = useSelector(selectUser);  // getting user from userSlice
  const dispatch = useDispatch()


  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if(userAuth){
          // logged in
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
          )
        } else {
          // logged out
          dispatch(logout())
        }
      })
      return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>
        ) : (
           <Switch>
          <Route path="/profile">
              <ProfileScreen/>
          </Route>
          <Route path="/test">
            <h1>this is a test</h1>
          </Route>
          <Route path="/">
            <HomeScreen/>
          </Route>
         </Switch>
        )}
        </Router>
    </div>
  );
}

export default App;
