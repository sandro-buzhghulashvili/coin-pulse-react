import React from "react";

import classes from "./LoadingPage.module.css"

const LoadingPage = () => {
    return (
        <div className={classes.loading}>
            <div className={classes.loader}></div>
            <div className={classes.loader}></div>
            <div className={classes.loader}></div>
        </div>
    )
}

export default LoadingPage