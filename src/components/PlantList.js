import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, onToggleStock }) {
  return (
    <ul className="cards">
      {plants.length > 0 ? (
        plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onToggleStock={onToggleStock}
          />
        ))
      ) : (
        <li>No plants available</li>
      )}
    </ul>
  );
}

export default PlantList;
