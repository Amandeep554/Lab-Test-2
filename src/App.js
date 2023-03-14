import './App.css';
import ProductTable from './ProductTable';
import AddProductForm from './AddProductForm';
import { useState } from 'react';

function App() {
  const [product, setProducts] = useState([]);

  const onSubmit = (data) => {
    setProducts([...product, data]);
  }
  return (
    <div className="App">
      <AddProductForm onSubmit={onSubmit} />
      <ProductTable products={product} />

    </div>
  );
}

export default App;
