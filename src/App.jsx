import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
function App() {

  return (
   <div>
   <Router>
     <Routes>
      <Route  path='/'  element={<HomePage/>}> </Route>
     </Routes>
   </Router>
   </div>
  )
}

export default App
