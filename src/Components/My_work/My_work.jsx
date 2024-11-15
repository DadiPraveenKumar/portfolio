import React from 'react'
import './My_work.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import mywork_data from '../../assets/mywork_data.js'
const My_work = () => {
  return (
    <div id="work" className='mywork'>
        <div className='mywork-title'>
            <h1>My Projects</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className='mywork-container'>
            {mywork_data.map((work,index) =>{
                return <img key={index} src={work.w_img} alt='' />
            })}  
        </div>
        <div className="mywork-showmore">
        <p>ShowMore</p>
        <img src={arrow_icon} alt=""/>
        </div>
    </div>
  )
}

export default My_work