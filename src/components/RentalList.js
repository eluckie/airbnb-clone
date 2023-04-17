import React from "react";
import Rental from "./Rental";
import Rental1Image from "./../img/rental1.png";
import Rental2Image from "./../img/rental2.png";
import Rental3Image from "./../img/rental3.png";

const mainRentalList = [
  {
    image: Rental1Image,
    location: 'Joshua Tree, California',
    rating: 4.92,
    distance: 758,
    price: 2611
  },
  {
    image: Rental2Image,
    location: 'Boulder, Utah',
    rating: 5.0,
    distance: 383,
    price: 1100
  },
  {
    image: Rental3Image,
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
        <Rental location={rental.location}
        rating={rental.rating}
        distance={rental.distance}
        price={rental.price}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default RentalList;