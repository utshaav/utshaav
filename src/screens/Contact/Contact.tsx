import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './Contact.scss';

type contactInput = {
  name: string | null
  email: string | null
  message: string | null
  phone: string | null
  company: string | null
}
let count = 0;
function Contact() {
  let initialValues: contactInput = { name: "", email: "", message: "", phone: "", company: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {

  }, [formSubmitted])

  let handleSubmit: Function = function (e: Event) {

    e.preventDefault();
    count++;
    if(count >=3 ){
      debugger
      setFormSubmitted(true);
    }
    if (handleValidation(formValues)) return;
    var postData: any = { ...formValues, subject: "Message from utsavkuinkel.com.np" };
    // let success = false;
    toast.promise(
      fetch('https://utshaav.bsite.net/api/mail/send', {
        method: 'post',
        body: JSON.stringify(postData),
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).then((response) => response.json())
        .then((result) => {
          setFormSubmitted(true);
          console.log('Success:', result);
        }),
      {
        pending: 'Processing your request.',
        success: 'Message delivered.',
        error: 'Backend server is down. Please write me a mail at contact-me@utshaav.com.np.'
      } 
    )
  }

  let handleChange: Function = function (e: Event) {
    // console.log(e.target);
    console.log(formValues);
    const { name, value } = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [name]: value })
  }

  let handleValidation = (values: any): boolean => {
    let error: any = {};
    let hasError: boolean = false;
    if (!values.name) {
      hasError = true;
      error.name = "* Name is required";
    }
    if (!values.email) {
      hasError = true;
      error.email = "* Email is required";
    }
    if (!values.message) {
      hasError = true;
      error.message = "* Message is required";
    }
    setFormErrors(error);
    // setHasError(hasError);
    return hasError;
  }

  return (
    <>
      <div className='ContactMe'>
        <div className="container">
          <div className="form-container">
            <div className="left-container">
              <div className="left-inner-container">
                <h2>Let's Chat</h2>
                <p>Whether you have a question, want to start a project or            simply want to connect.</p>
                <br />
                <p>Feel free to send me a message in the contact form</p>
                <br />
                <div className="social-container">
                  <a href="https://fb.com/utshaav" target="_blank" rel="noreferrer" className="social"><i className="fab fa-2x fa-facebook-square"></i></a>
                  <a href="https://www.instagram.com/utshaav_" target={"_blank"} rel="noreferrer" className="social"><i className="fab fa-2x fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/utshaav/" target={"_blank"} rel="noreferrer" className="social"><i className="fab fa-2x fa-linkedin"></i></a>
                  <a href="https://github.com/utshaav" target={"_blank"} rel="noreferrer" className="social"><i className="fab fa-2x fa-github"></i></a>
                </div>
              </div>
            </div>
            {formSubmitted ? null : <div className="right-container">
              <div className="right-inner-container">
                <form id='contact-form' action="#" onSubmit={event => handleSubmit(event)} >
                  <h2 className="lg-view">Contact</h2>
                  <h2 className="sm-view">Let's Chat</h2>
                  {/* <p>* Required</p> */}
                  <input name='name' type="text" placeholder="Name *" onChange={event => handleChange(event)} /> <br />
                  <span>{formErrors.name}</span>
                  <input name='email' type="email" placeholder="Email *" onChange={event => handleChange(event)} /><br />
                  <span>{formErrors.email}</span>
                  <input name='company' type="text" placeholder="Company" onChange={event => handleChange(event)} /><br />
                  <input name='phone' type="phone" placeholder="Phone" onChange={event => handleChange(event)} /><br />
                  <textarea name='message' rows={4} placeholder="Message" onChange={event => handleChange(event)}></textarea><br />
                  <span>{formErrors.message}</span>
                  <br />
                  <button type='submit'>Submit</button>
                </form>
              </div>
            </div>}

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact