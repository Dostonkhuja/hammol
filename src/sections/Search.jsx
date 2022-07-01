import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts, getSearchItem, setIsSearch, setSearchTxt} from "../business/productsSL";
import {Button, TextField} from "@mui/material";

const Search = () => {
    const dispatch = useDispatch()

    const {searchTxt} = useSelector(state => state.products)

    const handleChange = (e) => {
        dispatch(setIsSearch(true))
        dispatch(setSearchTxt(e.target.value))
        dispatch(getSearchItem({txt:searchTxt,limit:3,offset:0}))
        if(searchTxt.length === 0){
            dispatch(getAllProducts({limit: 3, offset: 0}))
            dispatch(setIsSearch(false))
        }
    }

    const handleSumbit = (e) => e.preventDefault()

    return (
        <div className="search">
            <form onSubmit={handleSumbit} className="search__form">
                <TextField  label="Search product..."
                            variant="outlined"
                            type="text" name='search'
                            onChange={handleChange}
                            value={searchTxt}
                            className="search__input" />
                <Button variant={'contained'} type='submit' className="search__button">search</Button>
            </form>
        </div>
    );
};

export default Search;