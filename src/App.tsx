import './App.css'
import NavBar from './components/NavBar/NavBar'
import { navData } from './Data/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar {...navData}></NavBar>
    </>
  )
}

export default App
