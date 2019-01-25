import React from 'react';

const Card= (props) => {
  const {id,name,email,username}=props;
  return(
  <div className="o-70 yellow tc ba b--gold bg-black dib br2 pa3 ma2 grow bw0.5 shadow-3">
    <img src={`https://robohash.org/${id}?100x100`} alt="Robot"/>
    <div>
     <h2>{name}</h2>
     <h3>{username}</h3>
     <p>{email}</p>
    </div>
  </div>
  );
}

export default Card;
