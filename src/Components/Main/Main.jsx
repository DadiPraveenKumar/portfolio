import React from 'react'
import './Main.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/resume.pdf'
const Main = () => {
  return (
    <div id='home' className='main'>
      <img className='image' src={profile_img} alt="" />
      <h1><span>I'm Praveen Kumar,</span> An Aspiring MERN stack  & JAVA Developer</h1>
      <p> a budding software developer with a keen focus on FullStack development</p>
      <div className="main-action">
        <div className="main-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="main-resume"><a href={resume} className='anchor-link-resume'> My Resume</a></div>
      </div>
    </div>
  )
}

export default Main
