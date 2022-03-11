import React, { useEffect, useState } from "react";
import './Products.css'
import Filters from '../Components/Filters';
import ProductTable from '../Components/ProductTable/ProductTable';
import ProductForm from '../Components/ProductForm';
import PRODUCTS from '../data/PRODUCTS.json';
import { productsObjectToArray } from '../Features/products'


export default function Products(){
    const [productsList, setProductsList] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    useEffect(()=>{
        let result = productsObjectToArray(PRODUCTS)
        setProductsList(result)
    },[])

    return(
        <div className="products-div">
            <Filters 
                filterText={filterText} 
                setFilterText={setFilterText} 
                inStockOnly={inStockOnly} 
                setInStockOnly={setInStockOnly}
            />
            <ProductTable 
                products={productsList}
                filterText={filterText} 
                inStockOnly={inStockOnly} 
            />
            <ProductForm productsList={productsList} setProductsList={setProductsList} />
        </div>
    )
}