import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.svg";
import IMG_20220122_133140 from "../images/IMG_20220122_133140.jpg";
export default function navigation() {
  return (
    <>
      <nav class="navbar navbar-expand fixed-top navbarScroll">
        <div class="container">
          <a class="navbar-brand" href="/" style={{ color: "brown" }}>
            Vicky
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#home" style={{ color: "brown" }}>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about" style={{ color: "brown" }}>
                  About
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#services">
                  Services
                </a>
              </li> */}
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#portfolio"
                  style={{ color: "brown" }}
                >
                  Portfolio
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <section class="bgimage" id="home">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
              <div class="">
                <div class="ring">
                  <img
                    src={IMG_20220122_133140}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                  <span></span>
                </div>
              </div>
              <div style={{ marginTop: "50px" }}>
                <h2 class="hero_title">Hi, it's me Vignesh</h2>
                <p class="hero_desc">I am a Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
