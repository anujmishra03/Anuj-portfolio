import React from 'react'
import './service.css'
// import themePattern from '../../assets/themePattern.svg'
// import arrow_icon from '../..assest/arrow_icon.svg'
//  import arrow_icon from '../../assets/arrow_icon.svg'
const Service_Data = [
    {
      s_no: "01",
      s_name: "Web Development",
      s_desc: "I create responsive and dynamic websites using modern frameworks.",
    },
    {
      s_no: "02",
      s_name: "UI/UX Design",
      s_desc: "I design user-friendly interfaces with a great user experience.",
    },
    {
      s_no: "03",
      s_name: "Backend Development",
      s_desc: "Building robust backend services using Node.js and Django.",
    },
  ];
const Service = () =>{
  return(
    <div id='service' className='service'>
        <div className="service-title">
            <h1>My Service</h1>
            <img src='' alt=''/>

        </div>
        <div className="service-container">
            {Service_Data.map((service,index)=>{
                return <div key={index} className ='service_format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Read More</p>
                        <img src='' alt=''/>
                        </div>
                    </div>
            })}
        </div>

      </div>
  )
}
export default Service