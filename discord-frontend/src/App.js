import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import LoginPage from './authPages/LoginPages/LoginPage';
import Registerpage from './authPages/RegisterPage/Registerpage';
import Dashboard from './Dashboard/Dashboard';
import './App.css';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return (
      <>
      <Router>
        <Switch>
          <Route exact path='/login' element={<LoginPage/>} />
          <Route exact path='/register' element={<Registerpage/>} />
          <Route exact path='/dashboard' element={<Dashboard/>} />
          <Route exact path='/' element={<Dashboard/>} />
        </Switch>
      </Router>
      <AlertNotification/>
      </>
  );
}

export default App;
