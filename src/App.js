import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import UploadBooks from './components/UploadBooks/UploadBooks';
import SelectTexts from './components/SelectTexts/SelectTexts';
import ToReadAndTranslate from './components/ToReadAndTranslate/ToReadAndTranslate';
import WordsToPair from './components/WordsToPair/WordsToPair';
import UserProfile from './components/UserProfile/UserProfile';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';

const App = () => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <div className='app-wrapper-content'>
        <Route path='/upload' render={UploadBooks} />
        <Route path='/select' render={SelectTexts} />
        <Route path='/read' render={() => <ToReadAndTranslate />} />
        <Route path='/words' render={WordsToPair} />
        <Route path='/user' render={UserProfile} />
        <Route path='/settings' render={Settings} />
      </div>
    </div>
  );
}

export default App;
