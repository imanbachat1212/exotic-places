import React from 'react'
import './Home.css'
import videoBg from '../assets/videoBg.mp4'

import ReactRotatingText from 'react-rotating-text'

const Home = () => {

  return (
    <>
      <div className='main' id='home'>
        <div className="overlay"></div>
        <video id="video" src={videoBg} autoPlay={true} loop muted playsInline />
        {/* <iframe src="https://drive.google.com/file/d/1D7dZ7JqWU4yih7me-jOS-XxdpBNmcCJz/preview" allow="autoplay" title='play'></iframe> */}

      </div>
      <div className="content">
        <h1>
          <ReactRotatingText items={['Happiness is closer than you think.', 'Adventure Awaits, go find it.', 'Dont be a tourist, be a traveler.']} />
        </h1>
      </div>



    </>
  )
}

export default Home