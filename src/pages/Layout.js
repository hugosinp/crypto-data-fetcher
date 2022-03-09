import React from 'react'
import { Outlet } from "react-router-dom";

import Header from '../components/molecules/Header'
import Footer from '../components/molecules/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout