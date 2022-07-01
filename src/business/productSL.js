import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {productAPI} from "../DAL/product";

//thunks
export const getProduct = createAsyncThunk('product/getProduct',
    async (id,thunkAPI) => {
        thunkAPI.dispatch(setPendingProduct(true))
        return await productAPI.getProduct(id)
    })

const productSL = createSlice({
    name:'productSL.js',
    initialState:{
        isPendingProduct:false,
        currentProduct:null
    },
    reducers: {
        setPendingProduct:(state,action)=> {
            state.isPendingProduct = action.payload
        },
        setCurrentProduct:(state,action)=> {
            state.currentProduct = action.payload
        }
    },
    extraReducers: {
        [getProduct.fulfilled]:(state,action)=> {
            state.isPendingProduct = false
            if (action.payload.status === 200) {
                state.currentProduct = action.payload.data
            }
        }
    }
})

export const {setPendingProduct,setCurrentProduct} = productSL.actions
export default productSL.reducer