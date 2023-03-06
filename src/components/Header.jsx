import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className='nav snip1226'>

        <input type='checkbox' id='checkbox_toggle' />

        <label for='checkbox_toggle' class='hamburger'>
          &#9776;
        </label>
        <ul className='snip1226 menu '>

          <li className='logoo'>
            {' '}
            <img
              src={require('../media/exotic-places-logo-removebg-preview.png')}
              alt=''
              className='logo'
            />
          </li>

          <li className='current'>
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


    </>
  )
}

export default Header
