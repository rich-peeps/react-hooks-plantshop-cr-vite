import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  function handleStockClick() {
    setInStock((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
