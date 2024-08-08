import ContainerList from './components/main/ContainerList'
import { BrowserRouter , Router , Route, Routes } from 'react-router-dom'
import About from './components/header/navbar/about/About'
import Contacto from './components/header/navbar/contacto/Contacto'
import Layout from './components/pages/Layout'
import './App.css'
function App() {
  

  return (
    <>
    <BrowserRouter>
       <Layout>
         <Routes>
           <Route path='/' element={<ContainerList/>}/>
           <Route path='/about' element={<About/>}/>  
           <Route path='/contacto' element={<Contacto/>}/>
         </Routes>
           
        </Layout>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
