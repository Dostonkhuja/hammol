import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {categoryAPI} from "../DAL/category";

export const getAllCategorys = createAsyncThunk('categorys/getAllCategorys', async (data,thunkAPI) => {
    thunkAPI.dispatch(setPendingCategorys(true))
    return  await categoryAPI.getAllCategory()
})

const CategorysSL = createSlice({
    name:'categorysSL.js',
    initialState:{
        isPendingCategorys:false,
        categorys:[]
    },
    reducers:{
        setPendingCategorys:(state,action) => {
            state.isPendingCategorys = action.payload
        }
    },
    extraReducers: {
        [getAllCategorys.fulfilled]:(state,action)=> {
            state.isPendingCategorys = false
            if (action.payload?.status === 200) {
                state.categorys =[ "all",...action.payload.data]
            }
        }
    }
})

export const {setPendingCategorys} = CategorysSL.actions
export default CategorysSL.reducer