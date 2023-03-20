import React from 'react';
import './lastpage.css'

// import Img from '../../../../Images/logo.png'
import Facebook from '../../Logos/facebook.jpg'
import Inst from '../../Logos/inst.jpg'
import Twi from '../../Logos/twiter.jpg'
import In from '../../Logos/in.png'
import You from '../../Logos/you.jpg'
import Email from '../../Logos/email.png'

import styled from 'styled-components';



const Logo = styled.img`
height:10vh;

/* width: 150px; */

@media only screen and (max-width: 1360px) {
    height:10vh;
  }

`;

const Lastpage = () => {

  return (
    <div>
    <footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About the company</span> We are a leading technology company committed to providing innovative solutions to businesses and individuals. Our team of experts is passionate about technology and dedicated to delivering high-quality products and services.
    </p>
    <div id='e'>
    <div className="icons" id='bo'>
    <a href="https://www.facebook.com/profile.php?id=100086675444440" target="_blank" rel="noreferrer"><img className='aaa' src={Facebook} alt="" /></a>
            <a href="https://www.instagram.com/g_feature_/" target="_blank" rel="noreferrer"><img className='aaa' src={Inst} alt="" /></a>
            <a href="https://twitter.com/MrBreak17539690" target="_blank" rel="noreferrer"><img className='aaa' src={Twi} alt="" /></a>
           <a href="https://www.linkedin.com/in/rohan-shinde7/" target="_blank" rel="noreferrer"> <img className='aaa' src={In} alt="" /></a>
           <a href="https://www.youtube.com/channel/UCow4rLExVeaBJXUktZLSegQ" target="_blank" rel="noreferrer"><img className='aaa' src={You} alt="" /></a> 
           <a href="mailto:tech@gfeature.com" target="_blank" rel="noreferrer"> <img className='aaa' src={Email} alt="" /></a>
    </div>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div className='A'>
      {/* <i className="fa fa-map-marker"></i> */}
      <p><span> MG Road </span> Pune, Mahashtra</p>
    </div>
    <div className='A'>
      {/* <i className="fa fa-phone"></i> */}
      <a href="tel:919765065077" id='number' > (+91) 9765065077</a>
    </div>
    <div className='A'>
      {/* <i className="fa fa-envelope"></i> */}
      <p ><a  href="mailto:tech@gfeature.com" > tech@gfeature.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <div className='logoC'>
    <Logo src="./Img/logo.png"/>
    </div>
    <p className="menu">
      <a href="#H" >Home &nbsp; </a>|
      <a href="#S">&nbsp; Studio &nbsp;</a>|
      <a href="#W">&nbsp; Works &nbsp;</a>|
      <a href="#C">&nbsp; Contact us &nbsp;</a>
    </p>
    <p id='coppy'>Copyright © 2023 GFeature | GFeature - Tech Company </p>
  </div>
</footer>
    </div>
  )
}

export default Lastpage
