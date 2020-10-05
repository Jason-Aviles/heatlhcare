import React from 'react';
import {Link} from "react-router-dom"
const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
<header className="aboutUs__header">

<h1 className="aboutUs__text" >About US</h1>
</header>
</div>
<div className="aboutUs__para">
<h1 className="heading-secondary">Our Mission and Our Work</h1>



      <p className="aboutUs__paraText">Dedicated to advancing excellence and equity in education for all students, the Core Knowledge Foundation publishes educational books and materials and supports a growing network of Core Knowledge schools.</p>
      <Link to="/mission" className="btn btn-white">
       Learn About Our Mission
     </Link></div>
     <div className="aboutUs__para">
     <h1 className="heading-secondary">Our Mission and Our Work</h1>
     <p   className="aboutUs__paraText"  >The Core Knowledge Foundation is an independent, nonprofit, nonpartisan organization based in Charlottesville, Virginia, and founded in 1986 by E. D. Hirsch, Jr., professor emeritus at the University of Virginia and author of many acclaimed books on education.</p></div>
     <div className="aboutUs__para">
<h1 className="heading-secondary">Contact Us</h1>



      <p className="aboutUs__paraText">We welcome your questions, comments, and stories.</p>
      <a href="/" className="btn btn-white">
       contact Us
     </a></div>
    </>
  );
};

export default AboutUs;