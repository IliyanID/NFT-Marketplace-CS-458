import { useState } from "react"
import { GetAssetResponse, GetMarketPlaceResponse } from '../CommonTypes/MarketPlaceTypes'
import { STATUS } from "../CommonTypes/CommonTypes"
import { SpotlightDisplayMock } from "../static/mock/SpotlightDisplayMock"
import { trendingMock } from "../static/mock/trendingMock"
import { AssetMock } from "src/static/mock/AssetMock"

//Change to try out different api responses
const API_STATUS = STATUS.success as STATUS

export const useMarketPlace = () => {
    const [loading,setLoading] = useState(false)

    const getMarketPlace = (call_complete:(response:GetMarketPlaceResponse)=>void) => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)

            let response:GetMarketPlaceResponse = {
                status:API_STATUS,
            }
            switch(API_STATUS){
                case STATUS.success:
                    response.Spotlight = SpotlightDisplayMock
                    response.BrowseItems = trendingMock
                    break;
                case STATUS.info:
                    response.Spotlight = []
                    response.BrowseItems = []
                    response.message = 'Unable to find any itmes'
                    break;
                case STATUS.warning:
                    response.Spotlight = SpotlightDisplayMock
                    response.message = 'Incomplete data'
                    break;
                case STATUS.error:
                default:
                    response.message = 'The server encountered an error'
            }

            call_complete(response)
        },1000)
    }

    const getAsset = (id:number,call_complete:(response:GetAssetResponse)=>void) => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            call_complete({
                status:STATUS.success,
                NFT:AssetMock
            })
        },1000)
    }

    return {
        loading,
        getMarketPlace,
        getAsset
    }
}