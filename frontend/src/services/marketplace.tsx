import { useState } from "react"
import { GetMarketPlaceRequest, GetMarketPlaceResponse } from 'CommonTypes/MarketPlaceTypes'
import { STATUS } from "CommonTypes/CommonTypes"
import { SpotlightDisplayMock } from "../static/mock/SpotlightDisplayMock"
import { trendingMock } from "../static/mock/trendingMock"

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
                    response.Spotlight = SpotlightDisplayMock,
                    response.BrowseItems = trendingMock
                    break;
                case STATUS.info:
                    response.Spotlight = []
                    response.BrowseItems = []
                    break;
                case STATUS.warning:
                    response.Spotlight = SpotlightDisplayMock
                    break;
                case STATUS.error:
                default:
            }

            call_complete(response)
        },1000)
    }

    return {
        loading,
        getMarketPlace
    }
}