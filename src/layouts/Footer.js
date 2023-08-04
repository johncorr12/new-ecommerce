import React from 'react'
import "../styles/Footer.css"
import { dataFooter } from '../FooterDB'

const Footer = () => {
  const CopyRight = new Date().getFullYear() 
  return (
    <div className='footer mt-5 bg-dark text-danger '>
      <div className='container d-lg-flex justify-content-between align-items-center p-4 footer-main'>
        {dataFooter.map((datumFooter)=>{
          const { id, title, contact, about, careers, blog} =datumFooter
          return(
          <div key={id}>
            <h2> {title} </h2>
            <ul className='list-unstyled lh-lg pt-3'>
              <li> {contact} </li>
              <li> {about} </li>
              <li> {careers} </li>
              <li>  {blog} </li>
            

           </ul>
          </div>
          )
        })}  
      </div>
      <p className='text-center'>Copyright © {} Johnny-city.com All rights reserved </p>


    </div>
  )
}

export default Footer