import React, { useState } from 'react';
import './component.css';
import { validateEmail } from '../utils/helpers';
import { Socials } from "./Home"

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, name, and message
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else {
          setMessage(inputValue);
        }
      };

      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
          setErrorMessage('Email or username is invalid');
          return;
        }
        alert(`Hello ${name}`);
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setMessage('');

      };

    return (
        <div>
            <section id="contact" class="contact">
            <div class="container">

            <div class="section-title">
                <h2>Contact</h2>
                <p>Contact Me</p>
            </div>

            <div class="row mt-2">

                <div class="col-md-6 d-flex align-items-stretch">
                <div class="info-box">
                    <i class="bx bx-map"></i>
                    <h3>My Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                </div>

                <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                <div class="info-box">
                    <i class="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <Socials />
                </div>
                </div>

                <div class="col-md-6 mt-4 d-flex align-items-stretch">
                <div class="info-box">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Me</h3>
                    <p>contact@example.com</p>
                </div>
                </div>
                <div class="col-md-6 mt-4 d-flex align-items-stretch">
                <div class="info-box">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Me</h3>
                    <p>+1 5589 55488 55</p>
                </div>
                </div>
            </div>

            <form className = "form" method="post" role="form" class="php-email-form mt-4">
                <div class="row">
                <div class="col-md-6 form-group">
                    <input
                        value= {name} 
                        name = "name"
                        onChange = {handleInputChange}
                        type="text" 
                        class="form-control" 
                        id="name" 
                        placeholder="Your Name" 
                        required
                    />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input 
                        value= {email} 
                        name="email" 
                        onChange = {handleInputChange}
                        type="email" 
                        class="form-control" 
                        id="email" 
                        placeholder="Your Email" 
                        required
                    />
                </div>
                </div>
                <div class="form-group mt-3">
                    <input 
                        value = {message}
                        name="message" 
                        onChange = {handleInputChange}
                        type="text" 
                        class="form-control" 
                        id="subject" 
                        placeholder="Add message here" 
                        required
                    />
                </div>
                <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

            </div>
        </section>
                </div>
    );
}

