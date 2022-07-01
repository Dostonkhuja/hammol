import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategorys} from "../business/categorysSL";
import {getAllProducts, getProductsCategory, setCurrentCategory, setCurrentPage} from "../business/productsSL";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Categorys = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {categorys} = useSelector(state => state.categorys)

    const handleClickCategory = (i) => {
        dispatch(setCurrentCategory(i))
        dispatch(setCurrentPage(1))
        navigate(`/`)
        i !== "all"
            ? dispatch(getProductsCategory({category: i, limit: 3, offset: 0}))
            : dispatch(getAllProducts({limit: 3, offset: 0}))
    }

    useEffect(() => {
        dispatch(getAllCategorys())
    }, [])

    return (
        <div className='categorys'>
            {categorys.map((i) =>
                <Button variant={'outlined'} onClick={() => handleClickCategory(i)} key={i} className="categorys__button">
                    {i}
                </Button>
            )}
        </div>
    );
};

export default Categorys;