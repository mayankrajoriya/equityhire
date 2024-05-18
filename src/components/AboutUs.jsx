import React from "react";
import mission from '../images/mission.gif'
import about2 from '../images/about2.gif'
import join from '../images/join.gif'

const AboutUs = () => {
  return (
    <div className="container text-light" id="about">
      <div className="main-about" data-aos="zoom-in"
        data-aos-duration="1000">
        <h1>About Us</h1>
        <p>
          At EquityHire, we're committed to reshaping the landscape of startup
          talent acquisition by exclusively focusing on candidates who are eager
          to contribute their skills and expertise in exchange for equity. Our
          platform serves as a catalyst for innovation, connecting ambitious
          startups with talented individuals who are driven by passion and
          motivated by equity.
        </p>
        <a href="#more" className="btn btn-warning">More About Us</a>
      </div>
      <div className="mission-main" id="more">
        <div className="mission-content" data-aos="flip-left"
        data-aos-duration="1000"><h3 className="text-warning">Our Mission</h3>
        <p>
          We believe that every startup deserves access to top-tier talent, and
          every professional should have the opportunity to contribute to the
          success of a groundbreaking venture. By bridging the gap between
          startups and talent willing to work on equity initially, we aim to
          empower the next generation of innovators and disruptors.
        </p></div>
        <div className="mission-img"><img src={mission} alt="mission" /></div>
      </div>
      <div className="set"><h3 className="border border-warning rounded p-1 text-warning">What Sets Us Apart</h3></div>
      <div className="set-design">
        <div><img src={about2} alt="about2" /></div>
        <div className="set-content" data-aos="flip-right"
        data-aos-duration="1000">
        <p>
          <span> 1. Startup-Centric Approach:</span> We understand the unique
          challenges startups face, from limited budgets to the need for rapid
          growth. That's why we tailor our solutions to meet the specific needs
          and goals of each startup we work with.
        </p>
        <p>
          <span> 2. Talent Discovery:</span> Our platform provides startups with
          access to a diverse pool of talent, ranging from seasoned experts to
          up-and-coming stars, all of whom are willing to work on equity
          initially. We carefully vet each candidate to ensure they have the
          skills, experience, and passion needed to drive success.
        </p>
        <p>
          <span>3. Equity-driven Culture:</span> We believe in the power of
          equity to align incentives and drive collaboration. Our platform
          enables startups to offer equity as a key part of their compensation
          packages, fostering a culture of shared ownership and mutual success.
        </p>
        <p>
          <span>4. Seamless Experience:</span>
          From posting job openings to negotiating agreements, we streamline the
          hiring process every step of the way. Our goal is to make finding
          talent as easy and efficient as possible, so startups can focus on
          what they do best—building their business.
        </p>
        </div>
      </div>
      
      <div className="join">
        
        <div className="join-content" data-aos="flip-left"
        data-aos-duration="1000">
        <h4 className="border-bottom border-warning text-warning">Join EquityHire Today</h4>
        <p>
          Whether you're a startup looking to hire top talent or a professional
          seeking an exciting opportunity to work on equity initially,
          EquityHire is here to help. Together, let's build a future where
          startups thrive and talent flourishes. Join us on this journey today.
        </p>
        
          </div>
          <img src={join} alt="join" />
          </div>
        </div>
  );
};

export default AboutUs;
