import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import LoadingPage from "../components/LoadingPage";
import Footer from "../components/Footer";

const LayoutPage = () => {
    const navigation = useNavigation()
    return (
        <>
        <MainNavbar/>
        {navigation.state === "loading" ?
        <LoadingPage /> :
        <Outlet />
        }
        <Footer />
        </>
    )
}

export default LayoutPage