import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { navData } from './Data/NavBar/NavBar'
import Home from './Pages/Home'
import Footer from './components/Footer/Footer'
import { footerData } from './Data/Footer/Footer'

function App() {

  return (
    <>
      <NavBar {...navData}></NavBar>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer {...footerData}/>
    </>
  )
}

export default App
