import React, {useState} from "react";

import { Link } from "react-router-dom";

import classes from "./MarketData.module.css"

const MarketData = ({data}) => {
    const [currentPage, setCurrentPage] = useState(0)

    const allCurrencies = data[currentPage].map(currency => {
        return (
            <Link to={currency.id} key={currency.id}>
            <li>
                <div>
                    <img src={currency.image}/>
                    <span>{currency.name}</span>
                </div>
                <p>${currency.current_price}</p>
                <p className={currency.price_change_percentage_24h < 0 ? classes.decrement : classes.increment}>{currency.price_change_percentage_24h.toFixed(2)}%</p>
                <p>${currency.market_cap}</p>
            </li>
            </Link>
        )
    })

    const paginationHandler = (page) => {
        setCurrentPage(page)
    }

    const paginationButtonsArr = []

    for(let i in data) {
        paginationButtonsArr.push(Number(i))
    }

    const paginationButtons = paginationButtonsArr.map(button => {
        return (
            <button className={button === currentPage ? classes.active : undefined} onClick={() => {paginationHandler(button)}} key={button}>{button + 1}</button>
        )
    })
    console.log(data)
    return (
        <div className={classes.main}>
            <h1>Market</h1>
            <div className={classes.stats}>
                <div className={classes.header}>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h Change</p>
                    <p>Market Cap</p>
                </div>
                <ul>
                    {allCurrencies}
                </ul>
            </div>
            <div className={classes.pagination}>
                {paginationButtons}
            </div>
        </div>
    )
}

export default MarketData