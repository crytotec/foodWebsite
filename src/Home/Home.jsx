import './Home.css'
import kitchen from '../Images/kitchen.jpeg'
import kitchen2 from '../Images/kitchen2.jpeg'
import { items } from '../Item'
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
 

function Home({search, add, setAdd}) {
  const [slide, setSlide]=useState(3)
 
  const forward = () =>{
    setSlide((prev)=>(prev + 1) % items.length)
  }

const backward = () =>{
    setSlide((prev)=>(prev - 1 + items.length) % items.length)
  }
const updateAdd = (prev) =>{
  const exist=add.find((item)=>item.id===prev.id);
  if (exist) {
   const updateCart= add.map((item)=>item.id===prev.id ?{...item, quantity:item.quantity + 1}:item)
    setAdd(updateCart);
  }else{
   setAdd([...add, {...prev, quantity : 1}])  
  }
  
}

  return(
    <div>
      <div className='sect'>
      <img src={kitchen} className='img'/>
      <img src={kitchen2} className='img'/>
       <div className='sectn'>
      <h1>Delight Your Taste Buds with Every Bite</h1>
<p>Explore delicious meals and culinary inspirations crafted to turn every dish into a masterpiece.</p>

       </div>
      </div>
    <div className='marquee'>
  <p>Welcome to Crytotec, your trusted partner in supplying quality food products across Nigeria.....</p>
</div>


      <div className='sect1'>
        <h1 className='text'>Check Out What We Sell</h1>
        <div className='sects'>
          {search.length ===0 &&(
           <div className='icon'>
          <FaArrowAltCircleLeft onClick={() => backward()}/>
             <FaArrowAltCircleRight onClick={() => forward()}/>
          </div>)}
         {search.length > 0 ? search.map((item, index) => (
          <div className='sects' key={item.id || index}>
            <div className='seectset'>
              <img className='img' src={item.img || index} />
              <p>{item.name}</p>
              <p>₦{item.price}</p>
               <button onClick={()=>updateAdd(item)}>{item.addtocart}</button>
            </div>
          </div>
        )):(slide + 3 <=items.length?items.slice(slide,slide + 3):[...items.slice(slide),...items.slice(0, (slide + 3)-items.length)]).map((items, index)=>
        <div className='sects' key={items.id || index}>
          <div className='seectset'>
          <img className='img' src={items.img}/>
          <p>{items.name}</p>
          <p>₦{items.price}</p>
            <button onClick={()=>updateAdd(items)}>{items.addtocart}</button>
          </div>
        </div>)}
        </div>
      </div>
   <div className='sect2'>
    <img src={kitchen2} className='img1'/>
    <div className='sectbac'>
    <p>Bring flavor to life with every bite. Our delicious meals are crafted with love, using the freshest ingredients to satisfy your cravings and nourish your soul. Whether you're enjoying a classic favorite or trying something new, each dish is prepared to perfection. Taste the comfort, joy, and creativity that define every meal we serve—because great food makes every moment special.</p>
   </div>
   </div>
   <div className='cate'>
    {items.map((items, index)=>
        <div className='sects' key={items.id || index}>
          <div className='seectset'>
          <img className='img' src={items.img}/>
          <p>{items.name}</p>
          <p>₦{items.price}</p>
           <button onClick={()=>updateAdd(items)}>{items.addtocart}</button>
          </div>
        </div>)}
   </div>
    
    </div>
  )
}
export default Home