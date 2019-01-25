import React from 'react';

const Scroll = (props) => {
  return(
  <div style={{overflowY:'scroll', border: '1px dotted red', height: '800px', padding: '5px'}}>
    {props.children};
  </div>
  );
}

export default Scroll;
