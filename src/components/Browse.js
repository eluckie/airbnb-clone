import React from "react";
import Filters from "./Filters";
import Search from "./Search";

const filterList = [
  {
    category: 'OMG'
  },
  {
    category: 'Cabins'
  },
  {
    category: 'Tiny Homes'
  },
  {
    category: 'Top of the World'
  },
  {
    category: 'Arctic'
  },
  {
    category: 'Treehouses'
  },
  {
    category: 'Mansions'
  }
];

function Browse() {
  return (
    <React.Fragment>
      <hr/>
      {filterList.map((filter, index) =>
        <Filters category={filter.category}
        key={index}/>
      )}
      <button>{">"}</button>
      <br/>
      <Search/>
      <br/><br/>
      <hr/>
    </React.Fragment>
  );
}

export default Browse;