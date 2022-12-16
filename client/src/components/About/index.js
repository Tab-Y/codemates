import React from 'react';
import Logo from '../images/logo.jpg';
import CPic1 from '../images/CarouselPic1.jpg';
import CPic2 from '../images/CarouselPic2.jpg';
import CPic3 from '../images/CarouselPic3.jpg';
import CPic4 from '../images/CarouselPic4.jpg';

const About = () => {
    return (
        <div>
        <header>
          <img src={Logo} alt="Logo"></img>
          <div className="p-5 text-center" style={{backgroundColor: "#c4fff9"}}>
            <h1 className="mb-3">Meet our developers</h1>
            <h4 className="mb-3">We are UCF Bootcamp students learning Full-Stack Web Development. Check out our links below to view our previous work.</h4>
          </div>
        </header>
        <main>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div className="carousel-inner carousel-fade">
                <div className="carousel-item active">
                  <img src={CPic1} class="d-block w-100" alt="CPic1"></img>
                  <div className="carousel-caption" style={{backgroundColor: "#051923"}}>
                    <h3>Taber Youmans</h3>
                    <a style={{color: "white"}} href="https://github.com/Tab-Y"><iconify-icon icon="ri:github-fill" width="100" height="100"></iconify-icon></a>
                      <a style={{color: "white"}} href="https://www.linkedin.com/in/taber-youmans-500587131/"><iconify-icon icon="mdi:linkedin" width="100" height="100"></iconify-icon></a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={CPic2} class="d-block w-100" alt="CPic2"></img>
                  <div className="carousel-caption" style={{backgroundColor: "#051923"}}>
                    <h3>Maria Constanza</h3>
                    <a style={{color: "white"}} href="https://github.com/MariaYConstanza"><iconify-icon icon="ri:github-fill" width="100" height="100"></iconify-icon></a>
                      <a style={{color: "white"}} href="https://www.linkedin.com/in/maria-constanza-09a1011b3/"><iconify-icon icon="mdi:linkedin" width="100" height="100"></iconify-icon></a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={CPic3} class="d-block w-100" alt="CPic3"></img>
                  <div class="carousel-caption" style={{backgroundColor: "#051923"}}>
                    <h3>Zechariah Naitram</h3>
                    <a style={{color: "white"}} href="https://github.com/Zechariahmn"><iconify-icon icon="ri:github-fill" width="100" height="100"></iconify-icon></a>
                      <a style={{color: "white"}} href="https://www.linkedin.com/in/zechariah-naitram-5179aa250/"><iconify-icon icon="mdi:linkedin" width="100" height="100"></iconify-icon></a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={CPic4} class="d-block w-100" alt="CPic4"></img>
                  <div class="carousel-caption" style={{backgroundColor: "#051923"}}>
                    <h3>Jessica Almand</h3>
                    <a style={{color: "white"}} href="https://github.com/jalmand2"><iconify-icon icon="ri:github-fill" width="100" height="100"></iconify-icon></a>
                      <a style={{color: "white"}} href="https://www.linkedin.com/in/jessicaalmand/"><iconify-icon icon="mdi:linkedin" width="100" height="100"></iconify-icon></a>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
         
      </main>
      </div>
        );
    };
    
    export default About;