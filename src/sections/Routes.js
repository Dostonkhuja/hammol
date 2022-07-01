import React from 'react';
import {Route, Routes} from "react-router-dom";
import Product from "./Product";
import Products from "./Products";

const AppRoutes = () => {
    return (
            <Routes>
                <Route exact path="/" element={<Products/>} />
                <Route path="product/:productId" element={<Product/>} />
            </Routes>
    );
};

export default AppRoutes;