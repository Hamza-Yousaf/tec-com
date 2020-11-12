import React from 'react';
// Images
const link2 = 'images/link2.png';
const startup_img1 = 'images/startup-img1.png';
const startup_img2 = 'images/startup-img2.png';
const startup_img3 = 'images/startup-img3.png';
const startup_img4 = 'images/startup-img4.png';

const StartupService = () => {
  return (
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
        <div className="startup-centent-block tcc-young-bug-bg">
          <h2>
            Coaching &amp; <br />
            Consulting Services
          </h2>
          <p>
            While I operate on multiple fronts, my primary expertise is on
            Blockchain,Internet of Things, Artificial Intelligence, and Data
            Analysis.I will provide you with thoroughly researched concise
            consultancy and guidance on the commercialization of your idea. This
            will ensure your tech startup has a strong foundation going forward.
          </p>
          {/* <p className="mt-4">I can help:</p> */}
          <div className="startup-link">
            <img src={link2} alt="link" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 p-md-0 tcc-white-bg">
        <div className="startup-centent-block-new">
          <h2>
            Product Design <br />
            &amp; Prototyping
          </h2>
          <p>
            Human beings are highly visual. In fact, 30 percent of our cerebral
            cortex is devoted purely to vision. So when you see a prototype, the
            most important thing about it is that you see it! I am skilled
            creating simple wireframes to testing fully functional mockups to
            help you understand all of the processes involved with the product
            design.
          </p>
        </div>
        <div className="startup-link">
          <img src={link2} alt="link" className="img-fluid" />
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
        <div className="startup-centent-block tcc-ocean-blue-bg">
          <h2>
            MVP &amp; Product <br />
            Development
          </h2>
          <p>
            An MVP is a minimal form of your product that is tested on the
            market. This development strategy allows your team to validate (or
            invalidate) product assumptions and learn how your target users
            react and experience your product’s core functionality. This
            approach will provide insight into properly allocating your budget
            to satisfy your overall business objectives.
          </p>
        </div>
        <div className="startup-link">
          <img src={link2} alt="link" className="img-fluid" />
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 p-md-0 tcc-white-bg">
        <div className="startup-centent-block-new">
          <h2>
            Team <br />
            Extension
          </h2>
          <p>
            When a founder needs to gather a software development team or
            quickly extend a team with the necessary skills, IT outsourcing to
            booming tech markets turns out to be the best option. IT outsourcing
            opens up the opportunity to attract the best talent. Indeed, it is
            easier to hire skilled software engineers in India than in the USA
            or the UK.
          </p>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
        <div className="startup-centent-block p-0">
          <img src={startup_img1} alt="startup" className="img-fluid" />
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
        <div className="startup-centent-block p-0">
          <img src={startup_img2} alt="startup" className="img-fluid" />
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
        <div className="startup-centent-block p-0">
          <img src={startup_img3} alt="startup" className="img-fluid" />
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
        <div className="startup-centent-block p-0">
          <img src={startup_img4} alt="startup" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default StartupService;
