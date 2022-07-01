import React from 'react';
import Search from "./Search";
import Categorys from "./Categorys";
import AppRoutes from "./Routes";
import BreadCrumbs from "./BreadCrumbs";

const Layout = () => {
    return (
        <>
                <header/>
                <main>
                    <Search />
                    <Categorys />
                    <BreadCrumbs />
                    <AppRoutes />
                </main>
                <footer/>
        </>
    );
};

export default Layout;