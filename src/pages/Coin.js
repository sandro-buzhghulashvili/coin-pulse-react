import React from "react";

import { useLoaderData } from "react-router-dom";

import CoinData from "../components/CoinData";

const CoinPage = () => {
    const data = useLoaderData()

    return (
        <CoinData data={data} />
    )
}

export default CoinPage

export const loader = async ({request,params}) => {
    try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`)

        return res
    } catch {

    }
}