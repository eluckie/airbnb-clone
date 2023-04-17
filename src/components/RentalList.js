import React from "react";
import Rental from "./Rental";

const mainRentalList = [
  {
    image: './../img/rental1.png',
    location: 'Joshua Tree, California',
    rating: 4.92,
    distance: 758,
    price: 2611
  },
  {
    image: './../img/rental2.png"',
    location: 'Boulder, Utah',
    rating: 5.0,
    distance: 383,
    price: 1100
  },
  {
    image: './../img/rental3.png',
    location: 'Austin, Texas',
    rating: 4.92,
    distance: 820,
    price: 585
  }
];

function RentalList() {
  return (
    <React.Fragment>
      {mainRentalList.map((rental, index) =>
      <div id="rental-list">
        <Rental location={rental.location}
        rating={rental.rating}
        distance={rental.distance}
        price={rental.price}
        key={index}/>
        <img src={rental.image} alt=""/>
        </div>
      )}
    </React.Fragment>
  );
}

export default RentalList;