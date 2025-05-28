import  { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { items } from '../Item'
import { Link } from 'react-router-dom';

function Navbar({setSearch}){
  const [drop, setDrop]=useState(false);
  const [form, setForm] =useState('');
  const outsideClick=useRef(null)
  const updateDrop = (Option) =>{
    setForm(Option.toLowerCase())
    setDrop(!drop)
    updateSearch(Option.toLowerCase())
  }

  const setoutsideClick = (event) =>{
    if(outsideClick.current && !outsideClick.current.contains(event.target)){
       setDrop(false)
    }
  }

  useEffect(()=>{
  document.addEventListener('mousedown', setoutsideClick);
  return () =>{
    document.removeEventListener('mousedown', setoutsideClick)
  }
  },[])

  const updateSearch = (prev = form) =>{
   const checksearch=items.find((item)=>item.name.toLowerCase() ===prev.toLowerCase());
   console.log(checksearch);
   setSearch(checksearch ? [checksearch] : [])
  }
  
  

  
  return(
    <div>
        <div className='nav'>
       <div className='navbar'>
        <h1>Cryto<span style={{color:'red'}}>tec</span></h1>
        <form ref={outsideClick} onSubmit={(e) =>{ e.preventDefault(); updateSearch()}} >
        <p onClick={() => setDrop(!drop)} className='dropDown'>DropDown</p>
           {drop && (<div className='setDrop'>
            <p onClick={()=>updateDrop('oha-soup and semo')}>oha-soup and semo</p>
            <p onClick={()=>updateDrop('okro soup')}>okro soup</p>
            <p onClick={()=>updateDrop('Rice and Efo')}>Rice and Efo</p>
            <p onClick={()=>updateDrop('sharwama')}>sharwama</p>
            <p onClick={()=>updateDrop('moimoi')}>moimoi</p>
            <p onClick={()=>updateDrop('Hamburger')}>Hamburger</p>
            </div>)}
            <input value={form} onChange={(e)=> setForm(e.target.value)} type='text' placeholder='search'/>
            <button>Search</button>
        </form>
        <ul>
          <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/About'>
            <li>About</li>
            </Link>
            <Link to='/Contact'>
            <li>Contact</li>
            </Link>
            <Link to='Cart'>
            <li>Cart</li>
            </Link>
        </ul>
       </div>
       </div>
    </div>
  )
}
export default Navbar