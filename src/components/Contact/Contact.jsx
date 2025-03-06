import React from 'react'
import './Contact.css'
import call from '../../assets/call.svg';
import mail_icon from '../../assets/mail_icon.svg'
import location from '../../assets/location.svg';
import themePattern from '../../assets/themePattern.svg'
const Contact= () =>{
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6c5226f5-e67b-475a-9300-63b8a8cc9efa");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return(
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={themePattern} alt=''/>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm curently available to take on new projects, so if you are interested in me feel free to talk</p>      
            <div className="contact-details">
              <div className="contact-detail">
                <img src={call} alt=''/><p>859599xxxx</p>

              </div>
              <div className="contact-detail">
                <img src={mail_icon} alt=''/><p>anujmishra2038@gamil.com</p>
                
              </div>
              <div className="contact-detail">
              <img src={location} alt=''/><p>Lucknow,India</p>
                              
                
              </div>
            </div>      
          </div>    
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter youre name' name='name'/>
            <label htmlFor=''>Your Email</label>
            <input type='text' placeholder='Enter youre Email' name='Email'/>
            <label htmlFor=''>Write Your messge </label>
            <textarea name='message' cols='80' rows='10' placeholder='Enter your messge'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
            </form>      
        </div>       
      
      </div>
  )
}
export default Contact;
