import React from "react";

export default function Filters({ filterText, inStockOnly, setFilterText, setInStockOnly }){
    return(
        <form className="filters-form">
            <input placeholder="Search..." value={filterText} onChange={(evt)=>setFilterText(evt.target.value)}/>
            <div className="filters-div-checkbox">
                <label htmlFor="filters-checkbox">
                    <input type="checkbox" id="filters-checkbox" name="filters-checkbox" checked={inStockOnly} onChange={(evt)=>setInStockOnly(evt.target.checked)}/>
                Only show products in stock
                </label>
            </div>
        </form>
    )
}
