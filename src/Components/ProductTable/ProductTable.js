import React, { useEffect, useState } from 'react';
import ProductTableHeaders from './ProductTableHeaders';
import ProductTableRow from './ProductTableRow';
import { filterProducts } from '../../Features/products'


const HEADERS = [{columnName:"name"}, {columnName:"price"}]

export default function ProductTable({ products, filterText, inStockOnly }) {
    const [sort, setSort] = useState({column:'name', direction:'desc'})
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [sortedData, setSortedData] = useState(products)

    useEffect(()=>{
        var results = filterProducts(products, filterText, inStockOnly)
        setFilteredProducts(results)
    }
    ,[products, inStockOnly, filterText])

    useEffect(()=>{
        function sortByKeyAndOrder(objectA, objectB) {
            let isDesc = sort.direction === 'desc' ? 1 : -1;
            let [a, b] = [objectA[sort.column], objectB[sort.column]];
            if (sort.column === 'price') {
            //eslint-disable-next-line
              [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
            }
            if (a > b) {
              return 1 * isDesc;
            }
            if (a < b) {
              return -1 * isDesc;
            }
            return 0;
        }
        var sortedData = filteredProducts.sort(sortByKeyAndOrder);
        setSortedData(sortedData)
    },[sort, filteredProducts])
    
    return (
        <table className='product-table'>
            <thead>
                <tr>
                {
                    HEADERS.map((header, index)=>( 
                        <ProductTableHeaders key={index} currentSort={sort} setSort={setSort} columnName={header.columnName}/> 
                    ))
                }
                </tr>
            </thead>
            <tbody>
                {
                    sortedData.length >0 ? sortedData.map((product) => (
                            <ProductTableRow key={product.id} product={product}/>
                    )) 
                    : 
                    <tr>
                        <td>No row</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}