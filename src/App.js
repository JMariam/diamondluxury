import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Page/Home'
import Footer from './Components/Footer'
import Err404 from './Page/Err404'



export default function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='' element={<Err404/>}/>
    </Routes>
    <Footer/>
</Router>
  )
}
