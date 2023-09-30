import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faBarsStaggered, faX } from "@fortawesome/free-solid-svg-icons";
import classes from "./MainNavbar.module.css"

const MainNavbar = props => {
    const [toggleNavbar,setToggleNavbar] = useState(false)
    const [stickyNav,setStickyNav] = useState(false)

    const toggleNavbarHandler = () => {
        setToggleNavbar(prevValue => !prevValue)
    }

    const burgerMenu = <FontAwesomeIcon onClick={toggleNavbarHandler} icon={faBarsStaggered} className={`${classes.icon} ${classes.burger}`} />
    const closeButton = <FontAwesomeIcon onClick={toggleNavbarHandler} icon={faX} className={`${classes.icon} ${classes.close}`}/>


    useEffect(() => {
        const scrollHandler = () => {
            if(window.scrollY > 30) {
                setStickyNav(true)
            } else {
                setStickyNav(false)
            }
        }

        window.addEventListener("scroll", scrollHandler)

        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [])
    return (
        <nav className={`${classes.nav} ${stickyNav ? classes.sticky : undefined}`}>
            <h1>COINPULSE</h1>
            <ul className={toggleNavbar ? classes.toggle : undefined}>
                {closeButton}
                <li><NavLink to=".." className={({isActive}) => isActive && !props.errorNav ? classes.active : undefined } end>Home</NavLink></li>
                <li><NavLink to="market" className={({isActive}) => isActive && !props.errorNav ? classes.active : undefined }>Market</NavLink></li>
                <li><NavLink to="why-choose-us" className={({isActive}) => isActive && !props.errorNav ? classes.active : undefined }>Choose Us</NavLink></li>
                <li><NavLink to="join" className={({isActive}) => isActive && !props.errorNav ? classes.active : undefined }>Join</NavLink></li>
            </ul>
            <div className={classes.icons}>
            <FontAwesomeIcon className={classes.icon} icon={faTwitter} />
            <FontAwesomeIcon className={classes.icon} icon={faDiscord} />
            </div>
            {burgerMenu}
        </nav>
    )
}

export default MainNavbar