import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Data } from './pages/Data';
import { Controller } from './pages/Control';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/data" element={<Data/>}/>
        <Route exact path="/controller" element={<Controller/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
