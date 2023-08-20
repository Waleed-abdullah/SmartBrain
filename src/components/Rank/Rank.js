import React, { useEffect } from 'react';
import { useState } from 'react';

const Rank = ({ name, entries }) => {
  const [emoji, setEmoji] = useState('🚫');

  async function generateEmoji(entries) {
    try {
      const response = await fetch(`your lambda API URL here`);
      const data = await response.json();
      setEmoji(data.input);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    generateEmoji(entries);
  });
  return (
    <>
      <div className="white f3">{`${
        name.charAt(0).toUpperCase() + name.slice(1)
      }, your current entry count is...`}</div>
      <div className="white f1">{entries}</div>
      <div className="white f3">{`Rank Badge: ${emoji}`}</div>
    </>
  );
};

export default Rank;
