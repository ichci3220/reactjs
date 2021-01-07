/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <div className="container">
        <div className="box">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>          
          <div className="social">
            <a href="#">
              <img src="#"/>
            </a>
            <a href="#">
              <img src="#"/>
            </a>
            <a href="#">
              <img src="#"/>
            </a>
          </div>
        </div>
        <div className="box">
          <h2>Adress</h2>
          <div className="adress">
            <a href="#">
            <img src="#"/>
            Colombo, Srilanka
            </a>
            <a href="tel:+94-766585478">
            <img src="#"/>
            +94 766585478
            </a>
            <a href="mailto:shaun.interact@gmail.com">
            <img src="#"/>
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
