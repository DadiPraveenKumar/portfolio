import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/deviceusing.png'
const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1> About me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>As a dedicated Full Stack Developer, My Passion to get a strong foundation in both frontend and backend development. </p>
                <p>Driven by curiosity and innovation, I create efficient, user-centric applications with a strong foundation in modern technologies and best practices.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"47%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"35%"}} /></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"30%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"35%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"35%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"38%"}} /></div>
                <div className="about-skill"><p>C</p><hr style={{width:"20%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>time</h1>
            <p>achivement-1</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>time</h1>
            <p>achivement-2</p>
        </div>
      </div>
    </div>
  )
}

export default About
