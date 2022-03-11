import React, { useState } from 'react';

export default function ProductForm({ productsList, setProductsList }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] =useState('');
    const [inStock, setInStock] =useState(false);

    const onSubmit = (evt) =>{
        evt.preventDefault()
        let results = productsList
        results.push({id:name, name, category, price, inStock})
        setProductsList(results)
        console.log(productsList)
    }

  return (
    <form className='product-form' onSubmit={onSubmit}>
        <h2>Enter a new product</h2>
        <label className='product-form-label'>
            Name
            <input value={name} onChange={(evt)=> setName(evt.target.value)}/>
        </label>
        <label className='product-form-label'>
            Category
            <input value={category} onChange={(evt)=> setCategory(evt.target.value)}/>
        </label>
        <label className='product-form-label'>
            Price
            <input value={price} onChange={(evt)=> setPrice(evt.target.value)}/>
        </label>
        <label>
            In stock ?
            <input type="checkbox" value={inStock} onChange={(evt)=> setInStock(evt.target.checked)}/>
        </label>
        <button type="submit">save</button>
    </form>
  )
}
