import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Profile/Dialogs/DialogsContainer";

const App = (props) => {

  return (

          <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile/>
                }/>
                <Route path='/dialogs' render={() => <DialogsContainer/>
                }/>
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/settings' component={Settings}/>*/}
            </div>
          </div>
     );
}

export default App;