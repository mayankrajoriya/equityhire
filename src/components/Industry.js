import React from "react";
import finance from "../images/finance.gif";
import technology from "../images/technology.gif";
import marketing from "../images/marketing.gif";
import customer from "../images/customer.gif";
import legal from "../images/legal.gif";
import "./industry.css";

const Industry = () => {
  return (
    <div className="container industry text-light" id="industry">
      <div className="odd">
        <div className="odd-content" data-aos="fade-right"
        data-aos-duration="1000">
          <h4>Finance and Accounting: Achieve the bottom-line goals</h4>
          <p>
            Critical project? Extra seasonal staff? Accountants or analysts for
            permanent roles? Quickly find an entire spectrum of proven talent
            and job opportunities right here.
          </p>
        </div>
        <div className="odd-img" data-aos="fade-left"
        data-aos-duration="1000">
          <img src={finance} alt="finance" />
        </div>
      </div>

      <div className="even">
        <div className="even-img" data-aos="fade-right"
        data-aos-duration="1000">
          <img src={technology} alt="tech" />
        </div>
        <div className="even-content" data-aos="fade-left"
        data-aos-duration="1000" >
          <h4>
            Technology: Let your talent drive the next era of transformation
          </h4>
          <p>
            Add extra IT bandwidth. Leverage your latest certification. Our
            technology staffing specialists focus exclusively on connecting top
            jobs and high-demand talent.
          </p>
        </div>
      </div>

      <div className="odd">
        <div className="odd-content"  data-aos="fade-right"
        data-aos-duration="1000">
          <h4>Marketing and creative: Make a lasting impression</h4>
          <p>
            Build an entire marketing or digital team. Add your creative genius
            to a new campaign. Whatever you want to do next, find top talent and
            jobs right here.
          </p>
        </div>
        <div className="odd-img" data-aos="fade-left"
        data-aos-duration="1000">
          <img src={marketing} alt="" />
        </div>
      </div>

      <div className="even">
        <div className="even-img" data-aos="fade-right"
        data-aos-duration="1000">
          <img src={customer} alt="" />
        </div>
        <div className="even-content" data-aos="fade-left"
        data-aos-duration="1000">
          <h4>Administrative and customer support: Prioritize people</h4>
          <p>
            Discover thousands of administrative and customer support
            professionals, plus a wide range of open jobs, from receptionist to
            customer service representative.
          </p>
        </div>
      </div>

      <div className="odd">
        <div className="odd-content" data-aos="fade-right"
        data-aos-duration="1000">
          <h4> Legal: Raise your bar on talent and opportunities</h4>
          <p>
            Attorneys, paralegals, and specialized legal staff to support your
            practice or legal department. Jobs to grow your career. Find new
            legal talent and opportunities right here.
          </p>
        </div>
        <div className="odd-img" data-aos="fade-left"
        data-aos-duration="1000">
          <img src={legal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Industry;
