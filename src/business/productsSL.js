import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {productsAPI} from "../DAL/products";

//thunks
export const getAllProducts = createAsyncThunk('products/getAllProducts',
    async (data, thunkAPI) => {
        thunkAPI.dispatch(setPendingProducts(true))
        return await productsAPI.getAllProducts(data)
    })

export const getProductsCategory = createAsyncThunk('products/getProductsCategory',
    async (data, thunkAPI) => {
        thunkAPI.dispatch(setPendingProducts(true))
        return await productsAPI.getProductsCategory(data)
    })

export const getSearchItem = createAsyncThunk('products/getSearchItem',
    async (data, thunkAPI) => {
        thunkAPI.dispatch(setPendingProducts(true))
        return await productsAPI.getSearchItem(data)
    })

const productsSL = createSlice({
    name: 'productsSL.js',
    initialState: {
        isPendingProducts: false,
        products: [],
        isSearch:false,
        searchTxt:'',
        totalCountProducts:0,
        currentCategory: 'all',
        currentPage:1,
    },
    reducers: {
        setPendingProducts: (state, action) => {
            state.isPendingProducts = action.payload
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload
        },
        setIsSearch:(state,action) => {
            state.isSearch = action.payload
        },
        setSearchTxt:(state,action) => {
            state.searchTxt = action.payload
        },
        setCurrentPage:(state,action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: {
        [getAllProducts.fulfilled]: (state, action) => {
            state.isPendingProducts = false
            if (action.payload.status === 200) {
                state.totalCountProducts = Math.ceil(action.payload.data.count / 3)
                state.products = action.payload.data.products
            }
        },
        [getSearchItem.fulfilled]: (state, action) => {
            state.isPendingProducts = false
            if (action.payload.status === 200) {
                state.totalCountProducts = Math.ceil(action.payload.data.count / 3)
                state.products = action.payload.data.products
            }
        },

        [getProductsCategory.fulfilled]:(state,action)=> {
            state.isPendingProducts = false
            if (action.payload.status === 200) {
                state.totalCountProducts = Math.ceil(action.payload.data.count / 3)
                state.products = action.payload.data.products
            }
        }
    }
})

export const {setPendingProducts,setCurrentCategory,
    setIsSearch,setSearchTxt,setCurrentPage} = productsSL.actions
export default productsSL.reducer