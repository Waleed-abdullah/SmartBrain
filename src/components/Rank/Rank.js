import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <>
      <div className="white f3">{`${
        name.charAt(0).toUpperCase() + name.slice(1)
      }, your current entry count is...`}</div>
      <div className="white f1">{entries}</div>
    </>
  );
};

export default Rank;
