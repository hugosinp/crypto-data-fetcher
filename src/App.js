import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'
import Layout from './pages/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App