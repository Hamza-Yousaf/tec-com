import React from 'react';
const shake = 'images/shake.png';
const mklogo = 'images/mk-logo.png';

const StartupBenefit = () => {
  return (
    <div class="row">
      <div class="startup-benefit-outsource">
        <h3>
          How Startups Can Benefit from Outsourcing <br />
          Software Development
        </h3>
        <p>
          <a href="">Judy Robinett</a>, startup expert and best-selling author
          of Crack The Funding Code notes “The key decision point is around how
          quickly you need to get to market and what your financial resources
          are. Remember, outsourcing has been used by many very successful
          companies to develop their MVP, such as Slack, which is valued at
          $3.8bn, Skype which sold to Microsoft for $8.5bn, as well as BaseCamp
          and Github.”
        </p>
        <div class="startup-benefit-list">
          <ul>
            <li>
              Focus on your Business <br />
              Goals
            </li>
            <li>
              Reduce Costs on
              <br />
              Developement
            </li>
            <li>
              Access Tech Experts in <br />
              the Industry
            </li>
            <li>
              Get an Expert View on
              <br />
              Startup Idea
            </li>
          </ul>
        </div>
        <div class="position-relative pb-4">
          <div class="position-absolute w-100">
            <div class="startup-blended-bg position-relative">
              <div class="startup-blended-bg-circle circle-lft"></div>
              <div class="startup-blended-bg-circle circle-right"></div>
              <div class="shake-hand">
                <img src={shake} alt="shake hand" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="startup-stratgy-list">
            <div class="startup-stratgy-list-left">
              <ul>
                <li>Business Strategy</li>
                <li>Product Management</li>
                <li>Salaes & Marketing</li>
                <li>Fund Raising</li>
                <li>Client Relationships</li>
              </ul>
              <div class="startup-stratgy-list-left-txt">
                Startup
                <br />
                Founder<br></br>and CEO
              </div>
            </div>
            <div class="startup-stratgy-list-rhgt">
              <div class="startup-stratgy-list-rhgt-img">
                <span className="startup-mk-top-text">Startup Mentor</span>
                <img src={mklogo} alt="mk-logo" class="img-fluid" />
              </div>
              <ul>
                <li>
                  <span>Knowledge</span> : can help you to navigate some of the
                  more challenging aspects of the startup world
                </li>
                <li>
                  <span>Execution</span> : I help you to turn your ideas into
                  action
                </li>
                <li>
                  <span>Growth</span>: help you set goals and targets to
                  actually build your business
                </li>
                <li>
                  <span>Trust</span>: knowledge that comes from experience
                </li>
                <li>
                  <span>Truth</span>: I ask some of the harder questions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupBenefit;
