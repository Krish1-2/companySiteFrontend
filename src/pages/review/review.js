import './review.css';
import { useFormik } from 'formik';
import { useRef } from 'react';
import axios from 'axios';

export default function Review() {
  const currentDate = new Date();

    const reviews = {
        krish: 'I recently dined at [RestaurantName] and was thoroughly impressed by both the exquisite cuisine and the impeccable service. The menu showcased a variety of innovative dishes, blending bold flavors and beautiful presentation. The attentive and knowledgeable staff ensured that our meal was a memorable one, providing excellent recommendations and ensuring our satisfaction. I can’t recommend [RestaurantName] enough for a fantastic dining experience.',
        krisha: 'Lorem ipsum dolor sit amet...',
        ami: 'Lorem ipsum dolor sit amet...',
    };

    const validate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } 

        if (!values.product) {
          errors.product= 'Required';
        } 
        
          if (!values.review) {
            errors.review = 'Required';
          } 
      
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
    
        return errors;
      };


      const ReviewForm = () => {
        const formik = useFormik({
            initialValues: {
              email: '',
              name:'',
              review:'',
              product:'',
            },
            validate,
            onSubmit:async values => {
              console.log(values)
              var day=currentDate.getDate();
              var year=currentDate.getFullYear();
              var month=currentDate.getMonth();
              var date=year+"-"+month+"-"+day;
              const { email, name, review,product} = values;
              alert(JSON.stringify(values, null, 2));
              console.log( email, name, review,product)

              const post = { email:email,name:name,review:review,product:product,date:date}  
              await axios.post(`http://127.0.0.1:8000/review`,post)
              .then(
                alert("thankyou for the feedback")
              )
              .catch(err => {
                console.log(err);
              });

              await axios.get(`http://127.0.0.1:8000/review`)
              .then(res=>{
                console.log(res.data)
               }
              )
              .catch(err => {
                console.log(err);
              });
            },
  
          })  
          return (
            <form onSubmit={formik.handleSubmit} className='signUpForm'>
            <h3>SUBMIT A REVIEW...</h3>
              <div className='label w-100 align-item-center'>EMAIL:</div>
              <br/>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className='inputReview'
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
                className='inputReview'
              />
               {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
               <br/>
              <br/>
              <div className='label w-100 align-item-center'>PRODUCT:</div>
               <br/>
               <input
                id="product"
                name="product"
                type="string"
                onChange={formik.handleChange}
                value={formik.values.product}
                className='inputReview'
              />
               {formik.errors.product ? <div className='error'>{formik.errors.product}</div> : null}
               <br/>
              <br/>
              <div className='label w-100 align-item-center '>REVIEW:</div>
               <br/>
               <textarea
                id="review"
                name="review"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.review}
                className='inputReview'
              />
               {formik.errors.review? <div className='error'>{formik.errors.review}</div> : null}
               <br/>
               <br/>
                <br/>
              <button type="submit" className='submitButton'>SUBMIT</button>
            </form>
          );
        }; 

    const formRef = useRef(null); 

    const scrollToForm = () => {
        if (formRef.current) {
          window.scrollTo({
            behavior: 'smooth',
            top: formRef.current.offsetTop,
          });
        }
      };

    return (
        <div className='review-main-div'>
            <div className='review-pic-div'>
                <div className='cover-div'>
                    <h2>REVIEW</h2>
                    <h4 className='text-light'>Your opinion matters</h4>
                </div>
            </div>
            <div className='space'> </div>
            <a className='review-link' href="#reviewForm" >Click here to write a review</a>
            <div className='space'></div>
                <h4 className='text-start'>Have a look at what others think...</h4>
                <div className='reviewDiv'>
                {Object.keys(reviews).map((key) => (
                    <div>
                    <div className='reviewCard' key={key}>
                        <p>"{reviews[key]}"</p>
                        <i className='font-italic'>~{key}</i>
                    </div>
                    <div className='space'></div>
                </div>
                   
                ))}
                </div>
                <section id="reviewForm">
                <ReviewForm />
                </section>
        </div>
    );
}
