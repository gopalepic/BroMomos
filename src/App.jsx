import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Menu from './pages/Menu'
function App() {

  return (
   <div>
   <Router>
     <Routes>
      <Route  path='/'  element={<HomePage/>}> </Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
     </Routes>
   </Router>
   </div>
  )
}

export default App
