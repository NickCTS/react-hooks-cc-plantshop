import React, { useState } from 'react';

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    inStock: true
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, image, price, inStock } = formData;

    if (name && image && price) {
      onAddPlant({ name, image, price: parseFloat(price), inStock });
      setFormData({ name: '', image: '', price: '', inStock: true });
    }
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <label>
          <input
            name="inStock"
            type="checkbox"
            checked={formData.inStock}
            onChange={handleChange}
          />
          In Stock
        </label>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
