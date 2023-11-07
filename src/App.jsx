import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import TaskDuty from './Components/TaskDuty'
import './App.css'
import PageTwo from './Components/PageTwo'
import '../src/Styles/PageTwo.css'
import PageThree from './Components/PageThree'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route index element={<TaskDuty/>}/>
    <Route path='/PageTwo' element={<PageTwo/>}/>
    <Route path='/PageThree' element={<PageThree/>}/>


      </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
