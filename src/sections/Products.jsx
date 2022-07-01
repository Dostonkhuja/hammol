import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {Button, Pagination} from "@mui/material";
import {getAllProducts, getProductsCategory, getSearchItem, setCurrentPage} from "../business/productsSL";
import {useNavigate} from "react-router-dom";
import Viewer from 'react-viewer';

const Products = () => {
    const pageSize = 3

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {products, totalCountProducts, currentCategory, isSearch, searchTxt ,currentPage}
        = useSelector(state => state.products)

    const [visible, setVisible] = React.useState(false);
    const [currentImage, setCurrentImage] = React.useState(false);

    const handleChangePagination = (e, value) => {
        dispatch(setCurrentPage(value))
        value -= 1
        if (!isSearch) {
            currentCategory === "all"
                ? dispatch(getAllProducts({limit: pageSize, offset: currentPage * pageSize}))
                : dispatch(getProductsCategory({category: currentCategory, limit: pageSize, offset: currentPage * pageSize}))
        } else {
            dispatch(getSearchItem({txt: searchTxt, limit: pageSize, offset: currentPage * pageSize}))
        }
    }

    //didmount get all products
    useEffect(() => {
        handleChangePagination('', 1)
    }, [])

    return (
        <div className="products">
            <Viewer
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                images={[{src: currentImage, alt: ''}]}
            />
            <div className="products__box">
                {products.map(i =>
                    <div key={i.id}
                         className="products__product"
                    >
                        <div className="products__product_img-box"
                             onClick={(e) => e.stopPropagation()}>
                            <img
                                src={i.thumbnail}
                                alt={i.thumbnail}
                                className="products__img"
                                onClick={() => {
                                    setVisible(true)
                                    setCurrentImage(i.thumbnail)
                                }}
                            /> <br/>
                        </div>
                        <p>{i.brand} {i.title} </p>
                        <p>{i.description}</p>
                        <Button variant={'contained'}
                                className="products__button_see-more"
                                onClick={() => navigate(`/product/${i.id}`)}>
                            See More
                        </Button>
                    </div>
                )}
            </div>
            <div className="products__pagination-box">
                <Pagination count={totalCountProducts}
                            color='primary'
                            variant={'text'}
                            size="large"
                            page={currentPage}
                            className="products__pagination"
                            onChange={handleChangePagination}/>
            </div>
        </div>
    );
};

export default Products;


