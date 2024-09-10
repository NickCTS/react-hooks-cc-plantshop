import React, { useEffect, useState } from 'react';
import PlantCard from './PlantCard';
import NewPlantForm from './NewPlantForm';

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const response = await fetch('http://localhost:6001/plants');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPlants(data);
        setFilteredPlants(data); // Initialize filteredPlants with all plants
      } catch (error) {
        console.error('Error fetching plants:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlants();
  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => {
      const updatedPlants = [...prevPlants, newPlant];
      setFilteredPlants(updatedPlants);
      return updatedPlants;
    });
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPlants(filtered);
  };

  if (isLoading) {
    return <p>Loading plants...</p>;
  }

  return (
    <div>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          id="search"
          type="text"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="cards">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} onToggleStock={() => {}} />
          ))
        ) : (
          <li>No plants available</li>
        )}
      </ul>
    </div>
  );
}

export default PlantPage;
