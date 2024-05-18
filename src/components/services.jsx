import React from "react";
import img1 from "../images/img1.gif";
import img2 from "../images/img2.gif";
import img3 from "../images/img3.gif";
import img4 from "../images/img4.gif";


const Services = () => {
  return (
    <div className="service text-light container">
      <h1 className="text-center">
        Explore what <span className="text-warning ">EquityHire</span> brings to
        you
      </h1>
      <div className="service1">
        <img src={img1} alt="img1" data-aos="fade-right"
        data-aos-duration="1000"/>
        <div className="section1" data-aos="fade-left"
        data-aos-duration="1000">
          <p className="section-para">
            <span>
              Contract talent: Bring in proficient professionals in a flash
            </span>
            <br /> Swiftly secure the optimal match for your talent requirements
            by choosing from two adaptable and versatile solutions: contract
            talent or our full-time engagement professionals.
          </p>
          <p className="section-para">
            <span> Get talent tailored to your requirements</span>
            <br />
            Critical open position? Short- or long-term project? Annual workload
            surge? We'll tailor a contract talent solution for any scenario or
            environment on-site, remote, or hybrid.
          </p>
          <p className="section-para">
            <span>Identify prime candidates right away</span>
            <br /> No arbitrary lists here. By leveraging our contract talent
            expertise, exclusive database, and customized AI, we swiftly
            pinpoint top candidates so they can commence work for you sooner.
          </p>
        </div>
      </div>
      <div className="service1">
        <img src={img2} alt="img2" data-aos="fade-right"
        data-aos-duration="1000" />
        <div className="section1" data-aos="fade-left"
        data-aos-duration="1000">
          <p className="section-para">
            <span>Contract talent network</span>
            <br /> Enhance your business's capabilities whenever and wherever
            you need them by tapping into this extensive and skilled pool of
            proficient professionals. This solution enables you to:
            <ul>
              <li>
                Check Engage professionals with the option to transition them to
                permanent hires
              </li>
              <li>
                Check Recruit candidates from all experience levels, including
                early-career
              </li>
              <li>
                Check Access a wide variety of job titles and skills from across
                the globe
              </li>
            </ul>
          </p>
          <p className="section-para">
            <span>
              Permanent talent: Recruit smarter, achieve success faster{" "}
            </span>
            <br />
            Rapidly acquire elusive expertise, from early career to C-suite, to
            bolster your teams for the long haul.
          </p>
          <p className="section-para">
            <span>Fill critical roles quicker</span>
            <br /> Accelerate recruitment and onboard candidates for vital
            positions within days using our virtual interview process.
          </p>
        </div>
      </div>
      <div className="service1">
        <img src={img3} alt="img3" data-aos="fade-right"
        data-aos-duration="1000" />
        <div className="section1" data-aos="fade-left"
        data-aos-duration="1000">
          <p className="section-para">
            <span> Recruit with assurance</span>
            <br />
            Allow our recruiters and AI-driven matching to identify talent that
            aligns with your distinct requirements, skill gaps, and budget.
          </p>
          <p className="section-para">
            <span>Secure the talent you desire</span> Utilize our industry
            expertise to structure an offer that positions you favorably to
            secure your preferred candidate.
          </p>
          <p className="section-para">
            <span>Engage a specialized recruiter for hiring</span>
            <br /> Depend on our comprehensive understanding of the local job
            market to target candidates with the expertise you seek.
            <ul>
              <li>
                Catch the eye of top talent- we actively promote your job and
                your company
              </li>
              <li>
                Recruit more swiftly- select from candidates tailored to your
                precise needs by our exclusive artificial intelligence
              </li>
              <li>
                Close the deal- our staffing specialists will collaborate with
                you to ensure your offer is competitive for the role and market
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="service1">
        <img src={img4} alt="img4" data-aos="fade-right"
        data-aos-duration="1000"/>
        <div className="section1" data-aos="fade-left"
        data-aos-duration="1000" >
          <p className="section-para">
            <span>Executive search:</span>
            <br />
            Let expertise guide the way Selecting the appropriate leader is a
            critical endeavor. Depend on our retained executive search
            consultants to discover the C-suite and senior management
            professionals capable of steering your company forward domestically
            or internationally.
          </p>
          <p className="section-para">
            <span>We excel in executive search</span>
            <br />
            Effective searches demand astute discernment. Our consultants,
            seasoned business leaders themselves, pinpoint highly qualified
            executive candidates from their extensive industry connections.
            They'll impart our exclusive insights and market trends to assist
            you in making more informed decisions.
          </p>
          <p className="section-para">
            <span>Recruit your next leader with assurance</span>
            <br />
            Our discerning approach accelerates your search and swiftly
            identifies top-tier candidates perfectly aligned with your unique
            business objectives. We thoroughly assess candidates for their
            experience, leadership capabilities, and a mindset that complements
            your existing management team to foster long-term success.
          </p>
          <p className="section-para">
            <span>Receive VIP treatment throughout the process</span>
            <br />
            Whether you're overseeing a startup or a well-established
            enterprise, you receive our dedicated focus. Our executive search
            consultants remain personally committed to efficiently bringing the
            right individuals into your organization, from the initiation of
            your search to the moment your new senior-level leader joins the
            team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
