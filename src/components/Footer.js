/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import Facebook from './images/facebook.png'
import Instagram from'./images/instagram.png'
import Youtube from './images/youtube.png'
import Phone from './images/phone-call.png'
import Pin from './images/pin.png'
import Email from './images/email.png'

function Footer() {
  return (
    <>
      <div className="container">
        <div className="box">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>          
          <div className="social">
            <a href="https://www.facebook.com/horizon.interact/">
              <img src={Facebook}/>
            </a>
            <a href="https://www.instagram.com/horizon.interact/">
              <img src={Instagram}/>
            </a>
            <a href="#">
              <img src={Youtube}/>
            </a>
          </div>
        </div>
        <div className="box">
          <h2>Adress</h2>
          <div className="adress">
            <a href="https://www.google.com/search?q=horizon%20college&oq=horizon+college&aqs=chrome..69i57j46i20i131i199i263i291i433j46i175i199l2j46j0j69i60l2.11556j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=ALeKk024MJJXzL4OkOruYDBBYIi7bucN0w:1610036930558&rflfq=1&num=10&rldimm=12801291023053055909&lqi=Cg9ob3Jpem9uIGNvbGxlZ2UiA4gBAVoiCg9ob3Jpem9uIGNvbGxlZ2UiD2hvcml6b24gY29sbGVnZQ&ved=2ahUKEwi1wsj6noruAhUazDgGHRcPCqwQvS4wB3oECAoQIA&rlst=f#rlfi=hd:;si:12801291023053055909,l,Cg9ob3Jpem9uIGNvbGxlZ2UiA4gBAVoiCg9ob3Jpem9uIGNvbGxlZ2UiD2hvcml6b24gY29sbGVnZQ;mv:[[6.924443,79.9667489],[6.862198299999999,79.9085865]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:4">
            <img src={Pin}/>
            Colombo, Srilanka
            </a>
            <a href="tel:+94-766585478">
            <img src={Phone}/>
            +94 766585478
            </a>
            <a href="mailto:shaun.interact@gmail.com">
            <img src={Email}/>
            shaun.interact@gmail.com
            </a>
          </div>
        </div>
        <div className="box">
          <h2>Contact Us</h2>
          <form>
            <label for="mail">Email<span>*</span></label>
            <input type="email" name="mail" id="mail" required />
            <label for="mess">Message<span>*</span></label>
            <textarea name="mess" id="mess" rows="3" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>        
      </div>
      <div className="author">
        <p><span>ICHCI</span> Copyright © 2020/2021</p>
      </div>
    </>
  )
}

export default Footer
