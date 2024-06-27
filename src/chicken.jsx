
import React, { useState } from 'react';
import './chicken.css';
const ChickenCalculator = () => {
  const [legs, setLegs] = useState(0);
  const [wings, setWings] = useState(0);
  const [flesh, setFlesh] = useState(0);
  const [chickens, setChickens] = useState(0);
  const [remainingLegs, setRemainingLegs] = useState(0);
  const [remainingWings, setRemainingWings] = useState(0);
  const [remainingFlesh, setRemainingFlesh] = useState(0);

  const calculateChickens = () => {
    const totalLegs = Math.ceil(legs / 2);
    const totalWings = Math.ceil(wings / 2);
    

    const totalChickens = Math.max(totalLegs, totalWings, flesh);

    setChickens(totalChickens);
    setRemainingLegs(totalChickens * 2 - legs);
    setRemainingWings(totalChickens * 2 - wings);
    setRemainingFlesh(totalChickens * 2 - flesh);
  };

  return (
    <div>
      <h1>Chicken Calculator</h1>
      <label>
        Legs:
        <input
          type="number"
          value={legs}
          onChange={(e) => setLegs(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Wings:
        <input
          type="number"
          value={wings}
          onChange={(e) => setWings(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Flesh:
        <input
          type="number"
          value={flesh}
          onChange={(e) => setFlesh(Number(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calculateChickens}>Calculate</button>
      <h2>Results</h2>
      <p>Chickens Needed: {chickens}</p>
      <p>Remaining Legs: {remainingLegs}</p>
      <p>Remaining Wings: {remainingWings}</p>
      <p>Remaining Flesh: {remainingFlesh}</p>
    </div>
  );
};

export default ChickenCalculator;
