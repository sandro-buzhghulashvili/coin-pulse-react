import React from 'react';

import { Link, json, useRouteLoaderData } from 'react-router-dom';

import ethFoto from '../assets/ethereum.png';
import btcPhoto from '../assets/bitcoin.png';
import classes from './Home.module.css';

const HomePage = () => {
  const data = useRouteLoaderData('binance-loader');

  const headerData = data.slice(0, 4);

  return (
    <div className={classes.home}>
      <div className={classes.hero}>
        <img src={ethFoto} alt="ethereum" />
        <h1>
          TRACK AND TRADE <span>CRYPTO CURRENCIES</span>
        </h1>
        <img src={btcPhoto} alt="bitcoin" />
      </div>
      <div className={classes.data}>
        {headerData.map((currency) => {
          return (
            <div
              className={classes.currency}
              key={headerData.indexOf(currency)}
            >
              <img src={currency.image} alt="logo" />
              <div>
                <span>{currency.name}</span>
                <span
                  className={
                    currency.price_change_percentage_24h > 0
                      ? classes.increment
                      : classes.decrement
                  }
                >
                  {currency.price_change_percentage_24h}
                </span>
              </div>
              <p>$ {currency.current_price}</p>
            </div>
          );
        })}
      </div>
      <Link to="market" className={classes.link}>
        Browse more currencies
      </Link>
    </div>
  );
};

export default HomePage;

export const loader = async () => {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
    );
    if (!res.ok) {
      throw json(
        { message: 'Could not fetch api data, try again' },
        { status: 500 }
      );
    }
    return res;
  } catch {
    throw json(
      { message: 'Could not fetch api data, try again' },
      { status: 500 }
    );
  }
};
