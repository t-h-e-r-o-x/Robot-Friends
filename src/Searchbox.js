import React from 'react';

const Searchbox = ({searchChange}) => {
  return(
    <div className="pa2">
      <input className="yellow pa3 ba bw2 br-pill b--black bg-dark-red dim" type="search" placeholder="SEARCHROBO" onChange={searchChange}/>
    </div>
  );
}

export default Searchbox;
