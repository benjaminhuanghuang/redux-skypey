import React from 'react';
import _ from 'lodash';
import './App.css';

import store from "../store";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  // _.values convert object to array
  // https://lodash.com/docs/4.17.5#values
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} /> 
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;