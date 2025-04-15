import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Forgotpassword from './components/Forgotpassword'
import Profile from './components/Profile'
import EmailScreen from './components/EmailScreen'
import YahooMailClone from './yahoo/YahooMail'
const App = () => {
  return (
    <Router>
  <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/forgot/' element={<Forgotpassword/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/email' element={<EmailScreen/>}/>
    <Route path='/yahoomail' element={<YahooMailClone/>}/>
  </Routes>
    </Router>
  )
}

export default App;
