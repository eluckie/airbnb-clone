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
      {filterList.map((filter, index) =>
        <Filters category={filter.category}
        key={index}/>
      )}
      <hr/>
      <Search/>
    </React.Fragment>
  );
}

export default Browse;