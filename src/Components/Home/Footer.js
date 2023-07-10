import React, { useState } from 'react';
import './Footer.css'

function Footer() {

  return (<div >

    <footer>

      <div class="footer-bottom">
        <p>copyright &copy; <a href="#">Company Name</a>  </p>
        <div class="footer-menu">
          <ul class="f-menu">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
          </ul>
        </div>
        <div class="footer-menu">
          <ul class="f-menu">
            <li><a href="/Section1">Section 1</a></li>
            <li><a href="/Section2">Section 2</a></li>
            <li><a href="/Section3">Section 3</a></li>
            <li><a href="/Section4">Section 4</a></li>
          </ul>
        </div>
      </div>

    </footer>

  </div>);
}

export default Footer;
