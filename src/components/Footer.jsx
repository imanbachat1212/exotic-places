import React from 'react'
import './Footer.css'

const Footer = () => {
  const branchLoc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52655.40005389389!2d35.810805129106946!3d34.427707557225865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f6ab9db89d33%3A0x323c52527dde8578!2sTripoli!5e0!3m2!1sen!2slb!4v1676835649780!5m2!1sen!2slb";
  return (
    <>
      <div className="footer">
        <div className="fbox">
          <div className="aboutus">
            <h3>
              <span id="fdiff">A</span>bout us
            </h3>
            <p>
              “Travel is the main thing you purchase that makes you more extravagant”. We, at ‘EXOTIC PLACES’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.
            </p>
          </div>
          <div className="branch">
            <h3>
              <span id="fdiff">B</span>ranch Location
            </h3>
            <iframe
              src={branchLoc}
              style={{ border: 0 }}
              id="map"
              allowFullScreen=""

              loading="lazy"
              title="Brach Location"
            ></iframe>
          </div>
          <div className="quicklinks">
            <h3>
              <span id="fdiff">Q</span>uick Links
            </h3>
            <ul>
              <li>
                <a href='home'>
                  Home
                </a>
              </li>
              <li>
                <a href='PlacesToGo' data-hover='Place To Go' id='PlacesToGo'>
                  Place To Go
                </a>
              </li>
              <li>
                <a href='ThingsToDo' data-hover='Things To Do'>
                  Things To Do
                </a>
              </li>
              <li id='BookYourTrip'>
                <a href='BookYourTrip' >
                  Book Your Trip
                </a>
              </li>
              <li>
                <a href='Contact' data-hover='Contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>
        <hr />
        <div className="copy">
          {/* <h3>
            Copyright &copy; <span id="fdiff">T</span>rabebo 2020-21 | All
            Rights Reserved
          </h3> */}
        </div>
      </div>
    </>)
}

export default Footer