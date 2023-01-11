import React from "react";
import logo from "../logo.svg";
export default function About() {
  return (
    <>
      <section
        id="about"
        style={{
          height: "100vh",
          backgroundImage: "linear-gradient(45deg,#197db4,transparent)",
        }}
      >
        <div class="container">
          <h1 class="text-center">About Me</h1>
          <div class="row mt-4">
            <div class="col-lg-4">
              {/* <img src={logo} class="imageAboutPage" alt="" /> */}
            </div>

            <div class="col-lg-8">
              <p></p>
              <div class="row mt-3">
                <div class="col-md-6">
                  <ul style={{ listStyle: "none" }}>
                    <li>Vignesh</li>
                  </ul>
                </div>
              </div>
              <div class="row mt-3">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
