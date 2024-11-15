import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "59068687-ab4c-419e-806b-97e53dfc7a64");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("Mail Has Been Delivered")
        }
      };
    
  return (
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently avaliable to take on new projects,so feel free to contact me</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>praveendadi4912@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+919-492-176-128</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p> Anakapalli, Andhra Pradesh , INDIA</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right' >
                <label htmlFor=""> Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter Your email' name='email' />
                <label htmlFor="">Write your Message here</label>
                <textarea name='message' rows='8' placeholder='Enter Your Message'> </textarea>
                <button type='submit' className='contact-submit'> Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Contact
