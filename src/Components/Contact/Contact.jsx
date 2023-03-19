import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import styled from "styled-components";
import './contact.css'

// import Test from "./Test";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


// const Section = styled.div`
//   height: 100vh;
//   scroll-snap-align: center;

  
//   @media only screen and (max-width: 830px) {
//     scroll-snap-align: none;
//   }

// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: space-between;
//   gap: 50px;

//   @media only screen and (max-width: 830px) {
//     width: 100%;
//     flex-direction: column;
//     justify-content: center;
//   }
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   @media only screen and (max-width: 830px) {
//     justify-content: center;
//   }
// `;

// const Title = styled.h1`
//   font-weight: 200;
// `;

// const Form = styled.form`
//   width: 500px;
//   display: flex;
//   flex-direction: column;
//   gap: 25px;
//   @media only screen and (max-width: 830px) {
//     width: 300px;
//   }
// `;

// const Input = styled.input`
//   padding: 20px;
//   background-color: #e8e6e6;
//   border: none;
//   border-radius: 5px;
// `;

// const TextArea = styled.textarea`
//   padding: 20px;
//   border: none;
//   border-radius: 5px;
//   background-color: #e8e6e6;
// `;

// const Button = styled.button`
//   background-color: #da4ea2;
//   color: white;
//   border: none;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 5px;
//   padding: 20px;
// `;

// const Right = styled.div`
//   flex: 1;
//   @media only screen and (max-width: 830px) {
//     /* display: none; */
//     margin: 0px;
//     padding: 0px;
//   }
// `;

const Contact = () => { 

  const ref = useRef();
  const [success, setSuccess] = useState(null);

 

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
    // <Section>
    //   <Container>
    //     <Left>

    //       <Form ref={ref} onSubmit={handleSubmit}>
    //         <Title>Contact Us</Title>
    //         <Input placeholder="Name" name="name" />
    //         <Input placeholder="Email" name="email" />
    //         <Input placeholder="Email" name="email" />
    //         <Input placeholder="Email" name="email" />
    //         <TextArea
    //           placeholder="Write your message"
    //           name="message"
    //           rows={10}
    //         />
    //         <Button type="submit">Send</Button>
    //         {success &&
    //           "Your message has been sent. We'll get back to you soon :)"}
    //       </Form>

    //     </Left>

    //     <Right>
    //       {/* <Map /> */}
    //      {/* <Test/> */}
    //     </Right>
    //   </Container>

    // </Section>
<>
<div className="epps" id="C">
    <div id='contac'>
     <h2 id='contid'>Contact Us</h2>
     </div>
    
    <form id='forms'  onSubmit={handleSubmit}>
    <label id='label'>Email<b>*</b></label>
        <input  className='repus' 
        type="text" 
        placeholder='Email'
        name='user_email' 
        required/>

        <label  id='label'>Name<b>*</b></label>
        <input className='repus'
         type="text" 
         name='user_name'    
         placeholder='Name' 
         required/>

<label  id='label' >Number<b>*</b></label>
        <input className='repus'
         type="Number" 
         name='user_number'
         placeholder='Number with Country code'
         required/>

<label  id='label'>Country<b>*</b></label>
        <input className='repus' 
        type="text"   
        name='user_country'
        placeholder='Name of your Country'
        required/>
        

    <label  id='label' >Services<b>*</b></label>
    <select className='repus'  name='user_services'>
  <option className='repus'>Select Services</option>
  <option className='repus'>Website Development</option>
  <option className='repus'>Game Development</option>
  <option className='repus'>Digital Marketing</option>
  <option className='repus'>Video Editing</option>
  <option className='repus'>App Development</option>
</select>

     
     <label  id='label'>Message<b>*</b></label>
        <textarea className='repus'  placeholder='Message…'  
        name='user_message'    //name == user_message
        rows="5"
        required/>

      
      <div> 
        <button type='submit' id='btn' color='green'>Submit</button>
        </div>
      </form>
      </div>

      </>
  
  );
            };

export default Contact;