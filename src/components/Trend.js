import React, { useState } from 'react';
import Product from './Productdetail';
import { productArr } from "../util";

const Trend = () => {
    const [ products, setProducts ] = useState(productArr)
    const [ filter, setFilter ] = useState(products)
    const handleFilter = (param) => {
        if(param === 'all'){
            setFilter(products)
        }else{
            const filteredArr = products.filter(prod => prod.category === param)
            setFilter(filteredArr)
        }
        
    }
    return ( 
        <div className="trend mb-5">
            <h1 className="text-center mb-4">Trendy Products</h1>
            <div className="mb-5 text-center">
                <button onClick={()=>{ handleFilter('all')}}  className="btn btn-outline-dark mx-3">All</button>
                <button onClick={()=>{ handleFilter('Men')}} className="btn btn-outline-dark mx-3">Men</button>
                <button onClick={()=>{ handleFilter('Women')}} className="btn btn-outline-dark mx-3">Women</button>
                <button onClick={()=>{ handleFilter('Accessories')}} className="btn btn-outline-dark mx-3">Acessories</button>
            </div>
            <div className="grid-con">
                {
                    filter.map(product => (
                       <Product product={product}/>
                    ))
                }    
        
            </div>
        </div>
     );
}
 
export default Trend;