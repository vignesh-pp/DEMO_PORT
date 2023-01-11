import React from "react";
import logo from "../logo.svg";
export default function portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <div className="row" style={{ padding: "15px" }}>
            <div className="col-3 rounded">
              <div className="card " id="card">
                {" "}
                <a href="#" target="_blank" />
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body " style={{ height: "3.5rem" }}>
                  <p className="card-title text-center ">Project Name</p>
                </div>
              </div>
            </div>

            <div className="col-3 rounded">
              <div className="card ">
                {" "}
                <a href="#" target="_blank" />
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "3.5rem" }}>
                  <p className="card-title text-center">Project Name</p>
                </div>
              </div>
            </div>

            <div className="col-3 rounded">
              <div className="card ">
                {" "}
                <a href="#" target="_blank" />
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "3.5rem" }}>
                  <p className="card-title text-center">Project Name</p>
                </div>
              </div>
            </div>

            <div className="col-3 rounded">
              <div className="card ">
                {" "}
                <a href="#" target="_blank" />
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "3.5rem" }}>
                  <p className="card-title text-center m-auto">Project Name</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ padding: "15px" }}>
            <div className="col-3 rounded">
              <div className="card " id="card">
                {" "}
                <a href="#" target="_blank" />
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body " style={{ height: "3.5rem" }}>
                  <p className="card-title text-center ">Project Name</p>
                </div>
              </div>
            </div>

            <div className="col-3 rounded">
              <div className="card ">
                {" "}
                <a href="#" target="_blank" />
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "3.5rem" }}>
                  <p className="card-title text-center">Project Name</p>
                </div>
              </div>
            </div>

            <div className="col-3 rounded">
              <div className="card ">
                {" "}
                <a href="#" target="_blank" />
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "3.5rem" }}>
                  <p className="card-title text-center">Project Name</p>
                </div>
              </div>
            </div>

            <div className="col-3 rounded">
              <div className="card ">
                {" "}
                <a href="#" target="_blank" />
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "3.5rem" }}>
                  <p className="card-title text-center m-auto">Project Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
