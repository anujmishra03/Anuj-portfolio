import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='about' className='hero'>
      <img src={profile_img} alt='profile'  className='profile_img' />
      <h1><span>I'm Anuj Mishra</span> I'm a Techie</h1>
      <p>I'm a unique person who loves watching anime and playing sports.</p>
      <div className='hero-action'>  {/* Renamed to avoid duplicate class */}
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
