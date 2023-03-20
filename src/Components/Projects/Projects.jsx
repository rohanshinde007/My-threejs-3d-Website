import React from 'react';
import "./projects.css"
import Hotel from '../../Logos/hotel.png'
import Digital from '../../Logos/digital.png'
import Chat from '../../Logos/Chat.png'

export default function Projects() {



  return (
    <>
    <div className='mains'>
<ul className="cards">
  <li>
    <div  className="card">
      <img src={Digital} className="card__image" alt="/" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="/" /> */}
          <div className="card__header-text">
            <h3 className="card__title">Marketing Site</h3>            
            <span className="card__status">1 week ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>      
  </li>
  <li>
    <div  className="card">
      <img src={Hotel} className="card__image" alt="/" />
      <div className="card__overlay">        
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          {/* <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="/" /> */}
          <div className="card__header-text">
            <h3 className="card__title">Hotel Site</h3>
            <span className="card__status">1 month ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>
  </li>
  <li>
    <div className="card">
      <img src={Chat} className="card__image" alt="/" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="/" /> */}
          <div className="card__header-text">
            <h3 className="card__title">Image Sharing Site</h3>    
            <span className="card__status">6 month ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>
  </li>   
</ul>
</div>
  </>
  );
}