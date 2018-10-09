import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import StorePicker from '../Components/StorePicker'
import App from '../Components/App.js'

const Router = ()=> (
      <BrowserRouter>
      <switch>
       <Route path="/" component={StorePicker} exact />
       <Route path="/store/:storename" component={App} />
      </switch >
      </BrowserRouter >

  );

 export default Router;
