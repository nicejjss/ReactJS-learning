import { useState } from 'react'
import './App.css'
import ClassComponent from '../components/ClassComponents'
import FunctionalComponent1 from '../components/FunctionalComponent'
import ProductList from '../components/products'

function App() {
  let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
  ]

  return (
    <>
      {
      <ClassComponent />
      // <FunctionalComponent1 />
      // <ProductList name='abc' city = 'cba' listProduct={products}/>
      }
    </>
  )
}

export default App
