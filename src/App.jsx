import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/header/NavBar'
import Home from './pages/1.home/Home'
import Login from './pages/2.login/Login'
import About from './pages/3.about/About'
import Contact from './pages/4.contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
    <Router>
      <NavBar />
      
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />

    </Router>

    </div>
    
  )
}

export default App
