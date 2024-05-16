import React, { useState } from 'react';

  const AddProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      addProduct({ name, price: parseFloat(price) });
      setName('');
      setPrice('');
    };

    return (
      <div>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  };

export default AddProductForm;
