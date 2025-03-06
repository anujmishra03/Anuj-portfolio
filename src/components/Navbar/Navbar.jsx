import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Open_icon from '../../assets/open_icon.svg';
import Close_icon from '../../assets/Close_icon.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const underline = "path_to_underline_image"; // Define the path to the underline image
  const menuRef = useRef(null);
  
  const openmenu = () => {
    menuRef.current.style.right = "0";
  };
  
  const closemenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div id='home' className='navbar'> 
      <img src={Open_icon} onClick={openmenu} alt='Open menu' height={0} width={0} className='nav-mob-open'/> 
      <img src={logo} alt='Company logo' width={160} height={160} className='logo'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={Close_icon} onClick={closemenu} alt='Close menu' className='nav-mob-close'/>
      <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt=''/> : <></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src={underline} alt=''/> : <></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={() => setMenu("portfolio")}>portfolio</p></AnchorLink>{menu === "portfolio" ? <img src={underline} alt=''/> : <></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={() => setMenu("service")}>service</p></AnchorLink>{menu === "service" ? <img src={underline} alt=''/> : <></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt=''/> : <></>}</li>


      
      </ul>
     <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></div>
     </div>
  )
}
export default Navbar
