import './PackageCard.css'

export const PackageCard =(props)=>{
  
    return (
        <>
        <div className="card module">
          <div className='column'>
            <div className="img">
              <img src={props.img} id="placeimg" alt={props.placeName}/>
            </div>
            <div className="cont">
              <div className="name">
              <i class='bx bx-location-plus'></i> {props.placeName}
              </div>
              <div className="abt">
                {props.info}
              </div>
              <div className="price">{props.price}</div>
              <div className="go-btn">
                <a href='home'>
                <button className="gobtn">View plans</button>
                </a>
              </div>
              </div>
            </div>
          </div>
        </>
    )
}