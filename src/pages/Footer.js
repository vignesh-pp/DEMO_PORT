import React from "react";
import { BsFacebook } from "react-icons/bs";
import {AiFillInstagram,AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai'
export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div class="container-fluid">
          <div class="social-icons mt-4">
            <a href="https://www.facebook.com/" target="_blank">
              <BsFacebook/>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <AiFillInstagram/>
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <AiFillTwitterCircle/>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
             <AiFillLinkedin/>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
