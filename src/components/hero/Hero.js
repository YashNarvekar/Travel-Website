import React from 'react'
import './HeroStyle.css'
// import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../assets/maldivesVideo.mp4'

function Hero() {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4' />
    </video>
    <div className="content">
        <div className="title">
            <h1 className='heroH1' >TRAVEL TO EXPLORE</h1>
            <p className='heroP'>Man cannot discover new oceans unless he has the courage to lose sight of the shore</p>

        
        </div>

        <div className="search">
            <div className="container">
                <label htmlFor=""> Where u want to go</label>
                <input type="text" placeholder='Search Your Location' />

            </div>
            <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>

          <button className='button1'>Explore Now</button>

        </div>
    </div>

    </div>
  )
}

export default Hero