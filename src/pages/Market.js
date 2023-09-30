import React from "react";
import { useRouteLoaderData } from "react-router-dom";

import MarketData from "../components/MarketData";

const MarketPage = () => {
    const data = useRouteLoaderData("binance-loader")
    let currencyData = [...data.slice(0, 65)]

    const itemsOnSinglePage = 10
    const pageCount = Math.ceil(currencyData.length / itemsOnSinglePage)
    const paginatedData = {}

    for(let i = 0; i < pageCount; i++) {
        paginatedData[i] = currencyData.slice(0, itemsOnSinglePage)
        currencyData = currencyData.slice(itemsOnSinglePage, currencyData.length)
    }

    return (
        <MarketData data={paginatedData} />
    )
}

export default MarketPage