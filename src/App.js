import './App.css';
import Router from './router/Router';
import { MainContext } from './context/context'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => {
        setProducts(res.data.products);
      });
  }, []);

  const data = {
    products
  }

  return (
    <MainContext.Provider value={data}>
      <Router />
    </MainContext.Provider>
  );
}

export default App;
