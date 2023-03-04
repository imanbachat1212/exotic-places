import React from 'react'
import placesData from '../assets/data/placesData';
import { PackageCard } from '../assets/UI/PackageCard';
import './PlacesToGo.css';
import Carousel from 'react-elastic-carousel'

const breakPoints = [
  { width: 1, itemsToshow: 1 },
  { width: 550, itemsToshow: 2 },
  { width: 768, itemsToshow: 3 },
  { width: 1200, itemsToshow: 4 },

]

const PlacesToGo = () => {
  return (
    <>
      <div id='PlacesToGo'>
        <h2>Start Planing Your Holidayds</h2>


        <div className="row2">
          <Carousel breakPoints={breakPoints} itemsToShow={1} >
            {placesData?.map((element) => {
              return (
                <PackageCard
                  placeName={element?.place}
                  img={element?.img}
                  info={element?.info}
                  price={element?.price}
                  location={element?.place}

                />
              );
            })}
          </Carousel>
        </div>
      </div>

    </>
  )
}

export default PlacesToGo