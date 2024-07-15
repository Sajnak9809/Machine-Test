import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ListView from './ListView';
import DetailView from './DetailView';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path='listview' element={<ListView/>}/>
      <Route path='/post/:id' element={<DetailView/>}/>

    </Routes>

    </BrowserRouter>

  )
}

export default App