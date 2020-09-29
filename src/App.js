import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import { useStateValue } from './StateProvider'
import {auth} from './firebase';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe ('pk_test_51HTl1WGjYyVJRmJbBRgx19a3LBiozz3J6rO6nl6A87oDWyzelj0RvIhyAFC2TmI6juNBjyRiUzyikYzXYUJLmODD00NxqOJD5N');

function App() {  
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( (authUser) => {
      if ( authUser ) {
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {

        dispatch({
          type : 'SET_USER',
          user: null
        })
      }
    } );

    return () => {
      unsubscribe();
    }
  
  }, []);

  console.log(basket.user);

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path = '/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path = '/login'>
            <Header />
            <Login />
          </Route>

          
          <Route path = '/profile'>
            <Header />
            <h1>Profile page</h1>
          </Route>

          
          <Route path = '/return'>
            <Header />
            <h1>Return page</h1>
          </Route>

          
          <Route path = '/payment'>
            <Header />
            <Elements stripe = {promise}></Elements>
            <Payment />
          </Route>

          
          <Route path = '/profile/:name'>
            <Header />
            <h1> profile </h1>
          </Route>
          
          <Route path = '/'>
            <Header />
            <Home />
            
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
