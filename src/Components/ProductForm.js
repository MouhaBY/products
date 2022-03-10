import React from 'react'

export default function ProductForm() {
    const onSubmit = (evt) =>{
        evt.preventDefault()
    }

  return (
    <form className='product-form' onSubmit={onSubmit}>
        <h2>Enter a new product</h2>
        <label className='product-form-label'>
            Name
            <input />
        </label>
        <label className='product-form-label'>
            Category
            <input />
        </label>
        <label className='product-form-label'>
            Price
            <input />
        </label>
        <label>
            In stock ?
            <input type="checkbox"/>
        </label>
        <button type="submit">save</button>
    </form>
  )
}
