import React, { Component } from 'react';
import Link from 'next/link';

class Menu extends Component {
  render() {
    return (
      <div class="header-menu-bottm">
        <ul class="nav navbar-nav">
          <li>
            <a href="/technology-coaching-consulting">
              Technology Coaching &amp; Consulting{' '}
            </a>
          </li>
          <li>
            <Link href="/technology-consulting-services">
              <a>Technology Consulting Services </a>
            </Link>
          </li>
          <li>
            <a href="/technology-coaching-services">
              Technology Coaching services{' '}
            </a>
          </li>
          <li>
            <Link href="/coaching-consulting-fees">
              <a>Coaching &amp; Consulting Fees </a>
            </Link>
          </li>
          <li>
            <a href="/custom-software-development">
              Custom Software Development{' '}
            </a>
          </li>
          <li>
            <Link href="/startup">
              <a>Startups</a>
            </Link>
          </li>
          <li>
            <Link href="/cybersecurity">
              <a>CyberSecurity (Coming Soon)</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Testing&amp;QA (Coming Soon)</a>
            </Link>
          </li>
          <li>
            <Link href="/Blockchain">
              <a>Blockchain</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Cloud &amp; DevOps (Coming Soon)</a>
            </Link>
          </li>
          <li>
            <Link href="/technology-tools">
              <a>Technology &amp; Tools</a>
            </Link>
          </li>
          <li>
            <Link href="/Portfolio">
              <a>Portfolio </a>
            </Link>
          </li>
          <li>
            <Link href="/contact-me">
              <a>Contact me</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
