import React from "react";

const Home = () => {
  return (
    <div className="home" id="home">
      <section className="hero-section">
        <h1>
          Welcome to <span>EquityHire</span>
        </h1>
        <p>Empowering Startups, Building Futures</p>
      </section>
      <div className="mid container">
        <h4>
          Are you a startup looking to build a dream team without draining your
          runway?
          <br /> Or <br />
          are you a talent hungry for an opportunity to dive into the dynamic
          world of <br /> startups, fueled by passion and equity?
        </h4>
        <p>
          EquityHire is your bridge to the future of work. We specialize in
          connecting startups with talented individuals who are eager to
          contribute their skills,
          <br /> expertise, and time in exchange for only equity. Our platform
          serves as a meeting ground where ambitious startups and equity-minded
          professionals converge to create something extraordinary.
        </p>
      </div>
      <div className="container heading">
        <h2 className="head-equity">
          Why <span> EquityHire</span>?
        </h2>
      </div>

      <div className="container main-cards">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">1. Startups First</h5>
            <p className="card-text">
              We understand the unique challenges startups face when it comes to
              hiring. That's why we are dedicated to providing tailored solutions
              that align with your vision, values, and budget.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">2. Talent on Demand</h5>
            <p className="card-text">
              Access a pool of passionate professionals ready to roll up their
              sleeves and invest their time and expertise into your startup's
              success.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">3. Equity-driven Culture</h5>
            <p className="card-text">
              Our community thrives on the spirit of collaboration, innovation,
              and shared success. We believe in the power of equity to align
              incentives and fuel growth.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">4. Seamless Process</h5>
            <p className="card-text">
              From sourcing top talent to facilitating agreements, we streamline
              the hiring process, so you can focus on what truly
              matters—building your business.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container heading">
        <h2 className="head-equity">
          Join <span>EquityHire</span> Today
        </h2>
        </div>
        <div className="para">
        <p>
          <span>For Startups:</span> Whether you’re a fledgling startup or a growing venture,
          find the talent you need to propel your business forward. Let's create
          something remarkable. </p><p> <span>For Talent:</span> Ready to embark on an
          exhilarating journey with a startup? Explore exciting opportunities to
          work on groundbreaking projects and earn equity along the way.
        </p>
        </div>
    </div>
  );
};

export default Home;
