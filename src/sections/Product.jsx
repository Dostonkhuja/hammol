import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProduct, setCurrentProduct} from "../business/productSL";
import {useParams} from "react-router-dom";

const Product = () => {
    const dispatch = useDispatch();
    let {productId} = useParams();

    const {currentProduct} = useSelector(state => state.product)
    const [currentImage,setCurrentImage] = useState(null)

    //get product
    useEffect(() => {
        dispatch(getProduct(productId));
        return () => dispatch(setCurrentProduct(null));
    }, [])

    return (
        <div className="product">
            <div className="product__left img-box">

                {currentProduct && currentImage===null && <img src={currentProduct?.thumbnail}
                                        className="img-box__main-img"
                                        alt={currentProduct.thumbnail}/>}

                {currentImage !==null && <img src={currentImage}
                                        className="img-box__main-img"
                                        alt={currentProduct.thumbnail}/>}<br/>

                <ul className="img-box__list">
                    {currentProduct && currentProduct.images.map(i =>
                        <li className='img-box__item' onClick={()=> setCurrentImage(i)} key={i}>
                            <img src={i} alt={i} className="img-box__item_img"/>
                        </li>)}
                </ul>

            </div>
            <ul className="product__right-list">
                <li className="product__right-list_item">title: {currentProduct?.title}</li>
                <li className="product__right-list_item">category: {currentProduct?.category}</li>
                <li className="product__right-list_item product__right-list_desc">description: {currentProduct?.description}</li>
                <li className="product__right-list_item">discount percentage: {currentProduct?.discountPercentage}</li>
                <li className="product__right-list_item">price: {currentProduct?.price}</li>
                <li className="product__right-list_item">rating :{currentProduct?.rating}</li>
                <li className="product__right-list_item">stock: {currentProduct?.stock}</li>
            </ul>
        </div>
    );
};

export default Product;