import React from "react";

import './contact.css'

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

  const SERVICE_ID = "service_wl4jcyo";
  const TEMPLATE_ID = "template_5wz5lbf";
  const USER_ID = "zTIK6dMdk1M7ZiGd9";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  }

  return (
    <>
      <div className="epps" id="C">
        <div id='contac'>
          <h2 id='contid'>Contact Us</h2>
        </div>

        <form id='forms' onSubmit={handleSubmit}>
          <label id='label'>Email<b>*</b></label>
          <input className='repus'
            type="text"
            placeholder='Email'
            name='user_email'
            required />

          <label id='label'>Name<b>*</b></label>
          <input className='repus'
            type="text"
            name='user_name'
            placeholder='Name'
            required />

          <label id='label' >Number<b>*</b></label>
          <input className='repus'
            type="Number"
            name='user_number'
            placeholder='Number with Country code'
            required />

          <label id='label'>Country<b>*</b></label>
          <input className='repus'
            type="text"
            name='user_country'
            placeholder='Name of your Country'
            required />


          <label id='label' >Services<b>*</b></label>
          <select className='repus' name='user_services'>
            <option className='repus'>Select Services</option>
            <option className='repus'>Website Development</option>
            <option className='repus'>Game Development</option>
            <option className='repus'>Digital Marketing</option>
            <option className='repus'>Video Editing</option>
            <option className='repus'>App Development</option>
          </select>


          <label id='label'>Message<b>*</b></label>
          <textarea className='repus' placeholder='Message…'
            name='user_message'
            rows="5"
            required />


          <div>
            <button type='submit' id='btn' color='green'>Submit</button>
          </div>
        </form>
      </div>

    </>

  );
};

export default Contact;