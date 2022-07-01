import React from 'react';
import {Breadcrumbs} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts, getProductsCategory} from "../business/productsSL";

const BreadCrumbs = () => {
    const dispatch= useDispatch();

    const {currentProduct} = useSelector(state=>state.product)
    const {currentCategory} = useSelector(state => state.products)

    const handleClikLink= (link)=> {
        currentCategory !== "all"
            ? dispatch(getProductsCategory({category: currentCategory, limit: 3, offset: 0}))
            : dispatch(getAllProducts({limit: 3, offset: 0}))
    }

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" className="breadcramps">
                <Link to={'/'} onClick={()=>handleClikLink('products')}>Products</Link>
                <Link to={'/'} onClick={handleClikLink}>{currentCategory}</Link>
                {currentProduct && <Link to={'/'}>{currentProduct.title}</Link>}
            </Breadcrumbs>
        </div>
    );
};

export default BreadCrumbs;