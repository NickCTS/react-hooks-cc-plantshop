import React, { useState } from "react";

function PlantCard({ plant, onToggleStock }) {
  const [inStock, setInStock] = useState(plant.inStock);

  const handleToggleStock = () => {
    const newInStockStatus = !inStock;
    setInStock(newInStockStatus);
    onToggleStock(plant.id, newInStockStatus); // Notify parent component
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className={inStock ? "primary" : ""} onClick={handleToggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
