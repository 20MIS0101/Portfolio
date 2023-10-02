import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link}  from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className ="hello">Hello,</span>
            <span className ="introText">I'm <span className="introName">Kailash</span> <br /> College Student</span>
            <p className="introPara">I am a CS student who is trying to gain <br/>expierence and is working on doing something great.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  );
}

export default Intro;