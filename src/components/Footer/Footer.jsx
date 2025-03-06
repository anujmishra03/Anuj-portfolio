import React from 'react'
import './Footer.css'
import footer from '../../assets/footer.svg'
const Footer = () =>{
  return(
    <div className='footer'>
        <div className="footer-top">
           <div className="footer-top-left">
            <img src='' alt=''/>
            <p>
                I'm Forntend developer from India
            </p>
        </div> 
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={footer} height={20} width={20} alt=' '/>
                <input type='email' placeholder='Enter your email'/>

            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>
    <hr/>
    <div className="footer-bottom">
        <p className='footer-bottom-left'> © 2025 Anuj Mishra. All rights are reserved</p>
        <div className="footer-bottom-right">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Connect With me</p>
        </div>
        

    </div>
     

      </div>
  )
}
export default Footer