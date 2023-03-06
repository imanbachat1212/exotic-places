import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <nav class="navbar ">
        <div class="left">
          <h1>  <img
            src={require('../media/exotic-places-logo-removebg-preview.png')}
            alt=''
            className='logo'
          /></h1>
        </div>
        <div class="right">
          <input type="checkbox" id="check" />
          <label for="check" class="checkBtn">
            <i class="fa fa-bars"></i>
          </label>
          <ul class="list">
            <li>
              <a href='#home' data-hover='Home'>
                Home
              </a>
            </li>
            <li>
              <a href='#PlacesToGo' data-hover='Place To Go'>
                Place To Go
              </a>
            </li>
            <li>
              <a href='#ThingsToDo' data-hover='Things To Do'>
                Things To Do
              </a>
            </li>
            <li>
              <a href='#BookYourTrip' data-hover='Book Your Trip'>
                Book Your Trip
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
