import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faWallet, faPenRuler, faBolt, faSatellite, faChessKnight, faBoxesStacked } from "@fortawesome/free-solid-svg-icons"

export const DummyServices = [
    {
        name : "CONNECT YOUR WALLET",
        icon : <FontAwesomeIcon icon={faWallet} />,
        service : "Use Trust Wallet, Metamask or to connect to the app."
    },
    {
        name : "SELECT YOUR QUANTITY",
        icon : <FontAwesomeIcon icon={faPenRuler} />,
        service : "Upload your crypto and set a title, description and price."
    },
    {
        name : "CONFIRM TRANSACTION",
        icon : <FontAwesomeIcon icon={faBolt} />,
        service : "Earn by selling your crypto on our marketplace."
    },
    {
        name : "RECEIVE YOUR OWN NFTS",
        icon : <FontAwesomeIcon icon={faSatellite} />,
        service : "Invest all your crypto at one place on one platform."
    },
    {
        name : "TAKE A MARKET TO SELL",
        icon : <FontAwesomeIcon icon={faChessKnight}/>,
        service : "Discover, collect the right crypto collections to buy or sell."
    },
    {
        name : "DRIVE YOUR COLLECTION",
        icon : <FontAwesomeIcon icon={faBoxesStacked}/>,
        service : "We make it easy to Discover, Invest and manage."
    }
]