import React from "react";
import { HomeBook, HomeContainer, HomeCover, HomeWrapper } from "./styled";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeCover className="cover-left"></HomeCover>
        <HomeCover className="cover-right turn"></HomeCover>
        <HomeBook>
          <div className="book-page page-left">
            <div className="profile-page">
              <img
                className="rounded-full"
                src="/assets/images/avatar.jpg"
                alt="Happy"
              />
              <h1>Happy</h1>
              <h2>Web Developer</h2>
              <ul className="list-social flex">
                {listSocial.map((item: any, index: number) => (
                  <li key={index}>
                    <Link to={"#"} className="rounded-full">
                      <i className={`bx ${item.icon}`}></i>
                    </Link>
                  </li>
                ))}
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                reprehenderit asperiores animi nobis adipisci! Ipsum aliquid
                molestias quibusdam sed minus?
              </p>
              <div className="btn-box">
                <a href="" className="btn">
                  Download CV
                </a>
                <a href="" className="btn">
                  Contatc Me
                </a>
              </div>
            </div>
          </div>

          {/* page 1 & 2 */}
          <div className="book-page page-right turn" id="turn-1">
            {/* page1 */}
            <div className="page-front">
              <h1 className="title">Work Experience</h1>
              <div className="workeduc-box">
                <div className="workeduc-content">
                  <span className="year">
                    <i className="bx bxs-calendar">2020 - 2021</i>
                  </span>
                  <h3>Web Developer - Company</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptatem assumenda vero ipsum voluptates ipsa
                    suscipit delectus et est. Modi quas voluptas odio tempore
                    minima?
                  </p>
                </div>
              </div>
              <div className="workeduc-box">
                <div className="workeduc-content">
                  <span className="year">
                    <i className="bx bxs-calendar">2020 - 2021</i>
                  </span>
                  <h3>Web Developer - Company</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptatem assumenda vero ipsum voluptates ipsa
                    suscipit delectus et est. Modi quas voluptas odio tempore
                    minima?
                  </p>
                </div>
              </div>
              <div className="workeduc-box">
                <div className="workeduc-content">
                  <span className="year">
                    <i className="bx bxs-calendar">2020 - 2021</i>
                  </span>
                  <h3>Web Developer - Company</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptatem assumenda vero ipsum voluptates ipsa
                    suscipit delectus et est. Modi quas voluptas odio tempore
                    minima?
                  </p>
                </div>
              </div>
              <span className="number-page">1</span>
              {/* next button */}
              <span className="nextprev-btn" data-page="turn-1">
                <i className="bx bx-chevron-right"></i>
              </span>
            </div>
            {/* page2 education */}
            <div className="page-back">
              <h1 className="title">Education</h1>
              <div className="workeduc-box">
                <div className="workeduc-content">
                  <span className="year">
                    <i className="bx bxs-calendar">2020 - 2021</i>
                  </span>
                  <h3>Web Developer - Company</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptatem assumenda vero ipsum voluptates ipsa
                    suscipit delectus et est. Modi quas voluptas odio tempore
                    minima?
                  </p>
                </div>
              </div>
              <div className="workeduc-box">
                <div className="workeduc-content">
                  <span className="year">
                    <i className="bx bxs-calendar">2020 - 2021</i>
                  </span>
                  <h3>Web Developer - Company</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptatem assumenda vero ipsum voluptates ipsa
                    suscipit delectus et est. Modi quas voluptas odio tempore
                    minima?
                  </p>
                </div>
              </div>
              <div className="workeduc-box">
                <div className="workeduc-content">
                  <span className="year">
                    <i className="bx bxs-calendar">2020 - 2021</i>
                  </span>
                  <h3>Web Developer - Company</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptatem assumenda vero ipsum voluptates ipsa
                    suscipit delectus et est. Modi quas voluptas odio tempore
                    minima?
                  </p>
                </div>
              </div>
              <span className="number-page">2</span>
              {/* prev button */}
              <span className="nextprev-btn back" data-page="turn-1">
                <i className="bx bx-chevron-left"></i>
              </span>
            </div>
          </div>

          {/* page 3 & 4 */}
          <div className="book-page page-right turn" id="turn-2">
            {/* page 3 my services */}
            <div className="page-front">
              <h1 className="title">My Services</h1>
              <div className="services-box">
                <div className="services-content">
                  <i className="bx bx-code-alt"></i>
                  <h3>Web Developer</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
                <div className="services-content">
                  <i className="bx bx-paint"></i>
                  <h3>Web Developer 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
                <div className="services-content">
                  <i className="bx bx-bar-chart-alt"></i>
                  <h3>Web Developer 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
                <div className="services-content">
                  <i className="bx bx-search"></i>
                  <h3>Web Developer 4</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
              <span className="number-page">3</span>
              {/* next button */}
              <span className="nextprev-btn" data-page="turn-2">
                <i className="bx bx-chevron-right"></i>
              </span>
            </div>
            {/* page 4 my skill */}
            <div className="page-back">
              <h1 className="title">My Skill</h1>
              <div className="skills-box">
                <div className="skills-content">
                  <h3>Front-End</h3>
                  <div className="content">
                    <span>
                      <i className="bx bxl-html5"></i>HTML
                    </span>
                    <span>
                      <i className="bx bxl-css3"></i>CSS
                    </span>
                    <span>
                      <i className="bx bxl-javascript"></i>JS
                    </span>
                    <span>
                      <i className="bx bxl-angular"></i>Angular
                    </span>
                    <span>
                      <i className="bx bxl-react"></i>React
                    </span>
                    <span>
                      <i className="bx bxl-bootstrap"></i>Bootstrap
                    </span>
                    <span>
                      <i className="bx bxl-tailwind-css"></i>Tailwind
                    </span>
                  </div>
                </div>
                <div className="skills-content">
                  <h3>Front-End</h3>
                  <div className="content">
                    <span>
                      <i className="bx bxl-python"></i>Python
                    </span>
                    <span>
                      <i className="bx bxl-java"></i>Java
                    </span>
                    <span>
                      <i className="bx bxl-php"></i>PHP
                    </span>
                    <span>
                      <i className="bx bxl-nodejs"></i>Node
                    </span>
                  </div>
                </div>
                <div className="skills-content">
                  <h3>Front-End</h3>
                  <div className="content">
                    <span>
                      <i className="bx bxl-figma"></i>Figma
                    </span>
                  </div>
                </div>
              </div>
              <span className="number-page">4</span>
              {/* prev button */}
              <span className="nextprev-btn back" data-page="turn-2">
                <i className="bx bx-chevron-left"></i>
              </span>
            </div>
          </div>

          {/* page 5 & 6 */}
          <div className="book-page page-right turn" id="turn-3">
            {/* page 5 lastest project */}
            <div className="page-front">
              <h1 className="title">Latest Project</h1>
              <div className="portfolio-box">
                <div className="img-box">
                  <img src="" alt="" />
                </div>
                <div className="info-box">
                  <div className="info-title">
                    <h3>Project Name</h3>
                    <a href="#">
                      Live Preview<i className="bx bx-link-external"></i>
                    </a>
                  </div>
                  <p className="text-tech">Tech Used: </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vel assumenda nesciunt possimus quas rerum a quia quis harum
                    ad maxime.
                  </p>
                </div>

                <div className="btn-box">
                  <a href="#" className="btn">
                    Source Code
                  </a>
                  <a href="#" className="btn">
                    More Project
                  </a>
                </div>
              </div>
              <span className="number-page">5</span>
              {/* next button */}
              <span className="nextprev-btn" data-page="turn-3">
                <i className="bx bx-chevron-right"></i>
              </span>
            </div>
            {/* page 6 contact me */}
            <div className="page-back">
              <h1 className="title">Contact Me</h1>
              <div className="contact-box">
                <form action="#">
                  <input
                    type="text"
                    className="field"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="email"
                    className="field"
                    placeholder="Email Address"
                    required
                  />
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    className="field"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <input type="submit" className="btn" value="Send Message" />
                </form>
              </div>
              <span className="number-page">6</span>
              {/* prev button */}
              <span className="nextprev-btn back" data-page="turn-3">
                <i className="bx bx-chevron-left"></i>
              </span>
              <a href="#" className="back-profile">
                <p>Profile</p>
                <i className="bx bxs-user"></i>
              </a>
            </div>
          </div>
        </HomeBook>
      </HomeWrapper>
    </HomeContainer>
  );
};

const listSocial = [
  {
    icon: "bxl-facebook",
  },
  {
    icon: "bxl-twitter",
  },
  {
    icon: "bxl-linkedin",
  },
  {
    icon: "bxl-instagram-alt",
  },
];

export default Home;
