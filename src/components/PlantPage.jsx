import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  }, []);

  // Add new plant to state after POST succeeds
  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  // Search input handler
  function handleSearchChange(value) {
    setSearchTerm(value);
  }

  // Filter plants by name
  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
