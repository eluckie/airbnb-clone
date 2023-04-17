import React from "react";
import Rental from "./Rental";
import RentalImage1 from "./../img/rental1.png";
import RentalImage2 from "./../img/rental2.png";
import RentalImage3 from "./../img/rental3.png";

// const mainRentalList = [
//   {
//     image: '~/src/img/rental1.png',
//     location: 'Joshua Tree, California',
//     rating: 4.92,
//     distance: 758,
//     price: 2611
//   },
//   {
//     image: './../img/rental2.png',
//     location: 'Boulder, Utah',
//     rating: 5.0,
//     distance: 383,
//     price: 1100
//   },
//   {
//     image: './../img/rental3.png',
//     location: 'Austin, Texas',
//     rating: 4.92,
//     distance: 820,
//     price: 585
//   }
// ];

// function RentalList() {
//   return (
//     <React.Fragment>
//       <br/>
//       {mainRentalList.map((rental, index) =>
//       <div id="rental-list">
//         <Rental image={rental.image}
//         location={rental.location}
//         rating={rental.rating}
//         distance={rental.distance}
//         price={rental.price}
//         key={index}/>
//         </div>
//       )}
//     </React.Fragment>
//   );
// }

function RentalList() {
  return (
    <React.Fragment>
      <br/>
      <div id="rental-list">
        <img id="rental-img" src={RentalImage1} alt=""/>
        <h4>Joshua Tree, California - ⭐️ 4.92</h4>
        <p><em>758 miles away</em></p>
        <p><strong>$2,611</strong> night</p>
      </div>
      <div id="rental-list">
        <img id="rental-img" src={RentalImage2} alt=""/>
        <h4>Boulder, Utah - ⭐️ 5.0</h4>
        <p><em>383 miles away</em></p>
        <p><strong>$1,100</strong> night</p>
      </div>
      <div id="rental-list">
        <img id="rental-img" src={RentalImage3} alt=""/>
        <h4>Austin, Texas - ⭐️ 4.92</h4>
        <p><em>820 miles away</em></p>
        <p><strong>$585</strong> night</p>
      </div>
    </React.Fragment>
  );
}

export default RentalList;