import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

import classes from "./Footer.module.css"
import footerBg from "../assets/footer-bg.png"

const Footer = () => {
    return (
        <footer className={classes.footer}>
                <div className={classes.icons}>
                    <FontAwesomeIcon className={classes.icon} icon={faTwitter} />
                    <FontAwesomeIcon className={classes.icon} icon={faDiscord} />
                    <FontAwesomeIcon className={classes.icon} icon={faFacebook} />
                    <FontAwesomeIcon className={classes.icon} icon={faYoutube} />
                </div>
                <div className={classes.text}>
                    <span>Privacy</span>
                    <span>Terms of Use</span>
                </div>
        </footer>
    )
}

export default Footer