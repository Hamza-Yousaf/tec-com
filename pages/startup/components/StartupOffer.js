import React from 'react';
import Link from 'next/link';

const SpecialBlock = () => {
  return (
    <div class="row">
      <div class="col-md-12 p-md-0">
        <div class="startup-cto-vp">
          <div class="startup-cto-vp-lft">
            <h3>Does your startup need a Interim CTO/VP of engineering?</h3>
            <span class="mr-md-3 hire">
              <a
                href="/contact"
                class="btn startup-cmmn-btn startup-hireme-btn"
              >
                Hire me now{' '}
              </a>
            </span>
          </div>
          <div class="startup-cto-right">
            <p class="startup-txtline1">
              I offer coaching &amp; consulting services tailored for startup.
            </p>
            <p class="startup-txtline2">
              Prototype or MVP? I'll help you choose.
            </p>
            <div class="startup-cto-btn">
              <span class="mr-md-3">
                <Link href="/contact-me">
                  <a class="btn startup-cmmn-btn">Contact me </a>
                </Link>
              </span>
              <span>
                <Link href="/Portfolio">
                  <a class="btn startup-cmmn-btn">Portfolio </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialBlock;
