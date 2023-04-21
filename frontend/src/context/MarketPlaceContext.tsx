import { createContext, useState } from "react";
import { NFT } from "../CommonTypes/CommonTypes";

export type MarketPlaceState = {
    Spotlight:NFT[],
    BrowseItems:NFT[],
    setSpotLight:(nfts:NFT[])=>void,
    setBrowseItems:(nfts:NFT[])=>void,
    setState:(input:MarketPlaceState)=>void
}


    


export const DefaultMarketPlaceState:MarketPlaceState = {
    Spotlight:[],
    BrowseItems:[],
    setSpotLight:()=>{},
    setBrowseItems:()=>{},
    setState:()=>{}
}

export const MarketPlaceContext = createContext<MarketPlaceState>(DefaultMarketPlaceState)

export const MarketPlaceContextProvider = (props:{children:JSX.Element | JSX.Element[]}) => {

    const [MarketPlaceState,setMarketPlaceState] = useState<MarketPlaceState>({
        Spotlight:[],
        BrowseItems:[],
        setSpotLight:(nfts)=>{
            let tmpState = {...MarketPlaceState}
            tmpState.Spotlight = nfts
            setMarketPlaceState(tmpState)
        },
        setBrowseItems:(nfts)=>{
            let tmpState = {...MarketPlaceState}
            tmpState.BrowseItems = nfts
            setMarketPlaceState(tmpState)
        },
        setState:(input:MarketPlaceState)=>{
            setMarketPlaceState(input)
        }
    })

    return (
        <MarketPlaceContext.Provider value={MarketPlaceState}>
            {props.children}
        </MarketPlaceContext.Provider>
    )
}