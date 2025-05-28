import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Cart from './Cart/Cart'
import About from './About/About'
import Contact from './Contact/Contact'
import { useEffect, useState } from 'react'
import Checkout from './Checkout/Checkout'
import Footer from  './Footer/Footer'
function App() {
    const [search, setSearch]=useState([]);
     const [add, setAdd]=useState(()=>{
       const added=localStorage.getItem('add')
       return added ? JSON.parse(added):[]
     }
    );


    useEffect(()=>{
    localStorage.setItem('add', JSON.stringify(add))
    },[add])
 
    return(
        <div>
            <BrowserRouter>
             <Navbar setSearch={setSearch}/>
            <Routes>
            <Route path='/' element={ <Home search={search} add={add} setAdd={setAdd}/>} />
            <Route path='/Cart' element={ <Cart add={add} setAdd={setAdd}/>}/>
            <Route path='/Checkout' element={ <Checkout add={add}/>}/>
            <Route path='/About' element={ <About/>}/>
            <Route path='/Contact' element={ <Contact/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
           </div>
    )
}
export default App