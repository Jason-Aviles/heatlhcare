import React from 'react';
import headerVideo from "./compoenets/header/header.mp4";
import holdinHands from "./compoenets/img/holdingHands.jpg";
import key from "./compoenets/img/key.png";
import career from "./compoenets/img/careerIcon2.png";
import vision from "./compoenets/img/vision.png";
import team from "./compoenets/img/team.png";
import kids from "./css/kids.jpeg"
import youth from "./compoenets/img/youth.png"
import onePerson from "./compoenets/img/oneperson.png"
import family from "./compoenets/img/family.png"
import appointment from "./compoenets/img/appointment2.jpg"
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <>
    <header className="videoHeader">
   <div className="bg-video">
     <video className="bg-video__content" autoPlay muted loop>
       <source src={headerVideo} type="video/mp4" />
       Your brower is not supported!!!
     </video>
   </div>

   <div className="header-text">
     <h2 className="heading-secondary">
       <u>Healing is an Evolution</u>
     </h2>
     <a href="/" className="btn btn-white">
       Schedule an Appointment
     </a>
   </div>
 </header>

 <main className="main">
   <div className="paragraph">
     <p>
       We want to ensure all children can learn, grow, and develop to
       realize their fullest potential. Acenda works to prevent the cycle
       of child abuse and ultimately build happy, bright futures for
       at-risk children and families. With over 35 programs focused on
       kids through adolescents, including school-based services, Acenda
       strives to ensure youth of all ages are thriving inside and
       outside of the family unit.
     </p>
   </div>
   <div className="helpingHand">
     <img className="helpingHand__img "  src={holdinHands} />

     <h2 className="heading-secondary header-text">
       True healing takes place within.
       {/* <img width="45%" className="helpingHand__key" src={key} /> */}
     </h2>
   </div>

   <div className="about">
 
     <div className="boxes ">  <Link to="/mission">
       <h2 className="heading-secondary heading-secondary--smallFont">misson & vision</h2>
       <img src={vision} alt="vision" className="boxes__icon" />
       <h3 className="heading-third ">(cick here for more info)</h3></Link>
     </div>


     <div className="boxes ">
       <h2 className="heading-secondary heading-secondary--smallFont">our team</h2>
       <img className="boxes__icon" src={team} alt="team" />
       <h3 className="heading-third ">(cick here for more info)</h3>
     </div>
     <div className="boxes ">
       <h2 className="heading-secondary   heading-secondary--smallFont ">careers</h2>
       <img className="boxes__icon" src={career} alt="career" />
       <h3 className="heading-third ">(cick here for more info)</h3>
     </div>
   </div>
   <div className="Schedule">
<div className="Schedule__side">

<img className="Schedule__side--front" width="80%" alt={kids} src={kids}/>
{/* <div className="Schedule__side--back">
nack

</div> */}
</div>
<div className="about">
<div className="boxes ">
       <h2 className="heading-secondary heading-secondary--smallFont">individuals</h2>
       <img src={onePerson} alt="vision" className="boxes__icon" />
       <h3 className="heading-third ">(cick here for more info)</h3>
     </div>
     <div className="boxes ">
       <h2 className="heading-secondary heading-secondary--smallFont">youth</h2>
       <img className="boxes__icon" src={youth} alt="team" />
       <h3 className="heading-third ">(cick here for more info)</h3>
     </div>
     <div className="boxes ">
       <h2 className="heading-secondary   heading-secondary--smallFont ">family</h2>
       <img className="boxes__icon" src={family} alt="career" />
       <h3 className="heading-third ">(cick here for more info)</h3>
     </div>
</div>
   </div>

   <div className="Schedule__side">

<img className="Schedule__side__img"  alt={'jj'} src={appointment}/>


      
       <a href="/" className="header-text  btn-noHover btn-white ">
       Schedule an Appointment
     </a>
    
</div>
<div className="portal-login ">
<div style={{"display": "flex","alignItems": "center","justifyContent": "center"}}>
<div className="portal-login__container"><h4 className="portal-login__header">Acessing Jeffresy My Chart by logging in below</h4>
<input type="text" placeholder="username" className="portal-login__input"/>

<input type="text" placeholder="password" className="portal-login__input"/>
<button className="btn btn-white">Login</button></div>
</div>



</div>

 </main>
</>
  );
};

export default Home;