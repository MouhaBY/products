import React from 'react'

export default function ProductTableHeaders({columnName, currentSort, setSort}) {

  return (
    <th className='product-table-header-th'>
        {columnName}
        <button onClick={()=>{ setSort({column: columnName, direction:"asc"}) }} className={(currentSort.column === columnName && currentSort.direction === "asc") ? 'product-table-header-button-selected' : ''}>
          up
        </button>
        <button onClick={()=>{ setSort({column: columnName, direction:"desc"}) }} className={(currentSort.column === columnName && currentSort.direction === "desc") ? 'product-table-header-button-selected' : ''}>
          down
        </button>
    </th>
  )
}
