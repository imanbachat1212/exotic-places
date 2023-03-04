import React from 'react'
import './BookYourTrip.css'
import Bookform from '../assets/UI/Bookform'
import bookImg from '../media/book.jpg'

const BookYourTrip = () => {
   
  return (
    <><div id='BookYourTrip'>
     <h2>
          Book your tickets
          
        </h2>
        <div className="book-info">
          <p>( Fill out the form below and we will get back to you with a confirmation as soon as possible. )</p>  
        </div>
        <div className="row">
          <div className="img">
            <img src={bookImg} id="contactimg" alt={""}/>
          </div>
           <Bookform/>
        </div>
        </div>
    
    </>
  )
}

export default BookYourTrip