import React from 'react';
import { menu } from "../Data"

function Menu() {
  return (
    <section className='menu' id='menu'>
       
            <h3 className='heading'>OUR <span>Menu</span></h3>
     

        <div className='box-container'>
  {menu.map((item, index) => (
    <div key={index} className='box'>
      <img src={item.img} alt="" />
      <h3 className=''> Tasty And Healthy</h3>
      <div className='price'>
        $15.99 <span>$20.99</span>
      </div>
      <a href="" className='btn'>Add to cart</a>

      
    </div>
  ))}
</div>

    </section>
  )
}

export default Menu