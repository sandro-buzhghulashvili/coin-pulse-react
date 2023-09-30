import React from "react";

import { DummyServices } from "../components/DUMMY_SERVICES";

import img from "../assets/choose-main.png"
import classes from "./WhyChooseUs.module.css"

const WhyChooseUsPage = () => {
    return (
        <div className={classes['why-choose-us']}>
            <h1>WHY <span>CHOOSE US</span></h1>
            <div className={classes["main-container"]}>
                <div className={classes['container-1']}>
                    {
                        DummyServices.slice(0,3).map(service => {
                            return (
                                <div className={classes.service} key={service.name}>
                                <span className={classes.icon}>{service.icon}</span>
                                <div>
                                <h3>{service.name}</h3>
                                <p>{service.service}</p>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
                <img src={img} alt="choose main" />
                <div className={classes['container-1']}>
                    {
                        DummyServices.slice(3,6).map(service => {
                            return (
                                <div className={classes.service} key={service.name}>
                                <span className={classes.icon}>{service.icon}</span>
                                <div>
                                <h3>{service.name}</h3>
                                <p>{service.service}</p>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUsPage