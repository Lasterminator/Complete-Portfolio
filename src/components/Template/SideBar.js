import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Trinath Sai Subhash Reddy Pittala</h2>
        <p><a href="mailto:subhash8111999@gmail.com">subhash8111999@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Subhash. I am currently pursing my Masters in Computer Science at <a href="https://www.clemson.edu/">Clemson University</a> and had
      worked previously as a Full Stack Software Developer at <a href="https://www.rblbank.com/">RBL Bank</a> and <a href="http://www.glocol.net/">Glocol Networks</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
