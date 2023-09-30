import React from "react";

import classes from "./CoinData.module.css"

import DOMPurify from "dompurify";

const CoinData = ({data}) => {
    console.log(data)
    return (
        <div className={classes['coin-data']}>
            <div className={classes['caption']}>
                <img src={data.image.large} />
                <h2>{data.name}</h2>
                <p>Rank : #{data.coingecko_rank}</p>
            </div>
            <div className={classes.hero}>
                <div className={classes.header}>
                    <p>24h Change: <span className={data.market_data.price_change_percentage_24h < 0 ? classes.decrement : classes.increment}>{data.market_data.price_change_percentage_24h}%</span></p>
                    <p>Price : <span className={classes.price}>${data.market_data.current_price.usd}</span></p>
                    <p>Symbol : {data.symbol}</p>
                </div>
                <div className={classes.data}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      data.description ? data.description.en : ""
                    ),
                  }}
                ></p>
                </div>
            </div>
        </div>
    )
}

export default CoinData