import React, { useState } from 'react'

export default function Forms() {
  const [formData, setFormData] = useState({
    nom: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formData);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="nom">
          <label htmlFor="nom">Nom : </label>
          <input 
            type="text" 
            name="nom" 
            id="nom"  
            value={formData.nom} 
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email : </label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  )
}
