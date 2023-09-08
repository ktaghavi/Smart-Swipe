import {useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/header/NavBar'
import Home from './pages/1.home/Home'
import Login from './pages/2.login/Login'
import SignUp from './pages/3.signup/SignUp'
import Contact from './pages/4.contact/Contact'
import Footer from './components/footer/Footer'
import Profile from './pages/5.profile/Profile'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

const API = "http://localhost:3000/users";

function App() {

const [users, setUsers] = useState([]);
const [currentUser, setCurrentUser] = useState(null);
console.log(users)

useEffect(() => {
  fetch(API)
  .then(r=> r.json())
  .then(data => setUsers(data))
},[])

  

  return (
    <div>
    <Router>
      <NavBar users={users} setCurrentUser={setCurrentUser}/>
      
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login users={users} setCurrentUser={setCurrentUser}/>} />
      <Route path='/signup' element={<SignUp users={users} setUsers={setUsers}/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Profile currentUser={currentUser}/>} />
      </Routes>

      {/* <Footer /> */}

    </Router>

    </div>
    
  )
}

export default App
