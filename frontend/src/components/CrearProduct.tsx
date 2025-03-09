import React, { useState } from 'react';
import axios from 'axios';

const CreateProductForm = () => {
  // Estado para manejar los valores del formulario
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Maneja el cambio de valores en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'description') setDescription(value);
    if (name === 'price') setPrice(value);
  };

  // Función para enviar los datos al servidor
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post('http://localhost:3000/products', {
        name,
        description,
        price: parseFloat(price.toString()),
      });

      setSuccess(true);
      setName('');
      setDescription('');
      setPrice('');
    } catch (error) {
      setError('Error al crear el producto.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Crear Nuevo Producto</h1>

      {/* Mostrar mensaje de éxito o error */}
      {success && <div className="alert alert-success">Producto creado exitosamente!</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre del Producto
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={handleChange}
            required
            step="0.01"
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Creando...' : 'Crear Producto'}
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
