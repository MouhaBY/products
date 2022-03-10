export function productsObjectToArray(PRODUCTS){
    try{
        let result = Object.keys(PRODUCTS).map((pid)=>PRODUCTS[pid])
        return result
    }
    catch(err){
        return []
    }
}

export function filterProducts(products, filterText='', inStockOnly=false){
    var results = products;
    var upperFilterText = filterText.toUpperCase()
    if(products.length > 0){
        if(filterText.length > 0){
            results = results.filter(product => product.name.toUpperCase().includes(upperFilterText))
        }
        if(inStockOnly){
            results = results.filter(product => product.stocked === true)
        }
    }
    return results
}
