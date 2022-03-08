import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import Layout from './pages/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App