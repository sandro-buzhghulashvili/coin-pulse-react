import React from "react";

import { useRouteError } from "react-router-dom";

import classes from "./Error.module.css"
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
    const error = useRouteError()

    let message = "Something went wrong"

    if(error.status === 500) {
        message = error.data.message
    }

    if(error.status === 404) {
        message = "Resource was not found"
    }

    return (
        <>
        <MainNavbar errorNav={true} />
        <div className={classes.error}>
            <h1>{message}</h1>
        </div>
        <Footer />
        </>
    )
}

export default ErrorPage