import React from "react";
import './contact.css'
import {BsTelephoneFill} from "react-icons/bs";
import {FaLocationDot} from 'react-icons/fa6';
import {MdEmail} from 'react-icons/md';
import{TbDeviceLandlinePhone} from 'react-icons/tb'
import { useFormik } from 'formik';

export default function Contact(){

    const validate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } 
        
        if (!values.phone) {
            errors.phone = 'Required';
          } 
          
          if (!values.message) {
            errors.message = 'Required';
          } 
      
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
    
      
        return errors;
      };

      const ContactForm = () => {
        const formik = useFormik({
            initialValues: {
              email: '',
              name:'',
              message:'',
              phone:'',
            },
            validate,
            onSubmit:  values => {
              console.log(values)
              const { email, name, message,phone} = values;
              alert(JSON.stringify(values, null, 2));
              console.log( email, name, message,phone)
              const post = { email:email,name:name,message:message,phone:phone}  
            },
  
          })  
          return (
            <form onSubmit={formik.handleSubmit} className='signUpForm'>
            <h2>Leave your message here!</h2>
              <div className='label w-100 align-item-center'>EMAIL:</div>
              <br/>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className='input'
              />
               {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
               <br/>
              <br/>
              <div className='label w-100 align-item-center'>NAME:</div>
               <br/>
               <input
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className='input'
              />
               {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
               <br/>
              <br/>
              <div className='label w-100 align-item-center'>PHONE:</div>
               <br/>
               <input
                id="phone"
                name="phone"
                type="string"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className='input'
              />
               {formik.errors.phone ? <div className='error'>{formik.errors.phone}</div> : null}
               <br/>
              <br/>
              <div className='label w-100 align-item-center '>MESSAGE:</div>
               <br/>
               <textarea
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.message}
                className='input'
              />
               {formik.errors.message? <div className='error'>{formik.errors.message}</div> : null}
               <br/>
               <br/>
                <br/>
              <button type="submit" className='submitButton'>SUBMIT</button>
            </form>
          );
        };  

    return(
        <div className="contact-main-div">
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
            <div className="timings">
                <div className="timing-back">
                <h2>BUSINESS HOURS:</h2>
                <h4>MON-SAT:10:00AM-6:30PM</h4>
                <h4>SUNDAY CLOSED</h4>
                </div>
            </div>
            <p className="typing">FOR ANY ELECTRICALS ITEM CONTACT US!</p>
            <div className="contact-info">
                 <div className="info-div">
                    <BsTelephoneFill size={50}/>
                    <h2 className="text-dark p-4">PHONE</h2>
                    <div className="space"></div>
                    <h5><a href="tel:+919322602855" className="text-dark text-decoration-none">9322602855</a></h5>
                 </div>
                 <div className="info-div">
                    <TbDeviceLandlinePhone size={50}/>
                    <h2 className="text-dark pt-4 pb-3">TELEPHONE</h2>
                    <div className="space"></div>
                    <h5><a href="tel:02222054375" className="text-dark text-decoration-none">022 2205 4374</a></h5>
                    <h5><a href="tel:02222054375" className="text-dark text-decoration-none">022 4003 4105</a></h5>
                 </div>
                 <div className="info-div">
                    <MdEmail size={50}/>
                    <h2 className="text-dark p-4">EMAIL</h2>
                    <div className="space"></div>
                    <h5><a href="mailto:hvinod55@yahoo.co.in" className="text-dark text-decoration-none">hvinod55@yahoo.co.in</a></h5>
                 </div>
                 <div className="info-div">
                    <FaLocationDot size={50}/>
                    <h2 className="text-dark p-4">LOCATION</h2>
                    <div className="space"></div>
                    <h5>508,Kalbadevi,</h5>
                    <h5>Near Edward Theatre,Mumbai 400002</h5>
                 </div>
                </div>
                  <div  className="contact-form w-100">
            <div className="w-50 ">
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.6788718087587!2d72.82457009678957!3d18.945603099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce20314c9b9b%3A0x25b4a05d93e34c74!2sH.%20Vinodchandra%20%26%20Company%20-%20Hitesh%20Electricals!5e0!3m2!1sen!2sin!4v1692876879758!5m2!1sen!2sin" width="90%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>  
            </div>
            <div className="w-50 p-1"><ContactForm/></div>
        </div>
        <div className="space"></div>
        <div className="space"></div>
        </div>
    )
}