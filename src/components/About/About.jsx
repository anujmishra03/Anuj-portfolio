import React from 'react'
import './About.css'
import profile_img from '../../assets/About_profile_img.svg'
// import themePattern from '../../assets/themePattern.svg'
const About = () =>{
  return(
    <div id='About' className='About'>
        <div className='about-title'>
            <h1>About</h1>
           { <img src=''alt=''/>}
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_img} alt='profile_img' width={250} height={300}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an Beginner in Developing</p>
                    <p>My passion for frontend decvelopmnt is not only for </p>
                </div>
                <div className="about_skills">
                    <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>MERN</p><hr style={{width:"50%"}}/></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>WORK</h1>
                <p>IN PROGRESS</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>WORK</h1>
                <p> IN PROGRRESS</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>CLIENTS</h1>
                <p>WORK IN PROGRESS </p>
            </div>
                
        </div>
      
      </div>
  )
}
export default About