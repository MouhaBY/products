import React from 'react'

export default function ProductTableRow({ product }) {
  return (
    <tr>
        <td>
            <span className={product.stocked ? '' : 'product-table-row-td-red'}>
                {product.name}
            </span>
        </td>
        <td>{product.price}</td>
        <td>
            <button>x</button>
        </td>
    </tr>
  )
}
