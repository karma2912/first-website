import './App.css'
import FirstPage from './components/FirstPage'
import FourthPage from './components/FourthPage'
import Navbar from './components/Navbar'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
function App() {

  return (
    <>
    <Navbar/>
    <FirstPage/>
    <hr/>
    <SecondPage/>
    <hr/>
    <ThirdPage/>
    <hr/>
    <FourthPage/>
    </>
  )
}

export default App