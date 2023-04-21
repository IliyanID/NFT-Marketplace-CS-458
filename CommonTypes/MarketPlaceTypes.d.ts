import { StatusResponse, NFT } from './CommonTypes'

export type GetMarketPlaceRequest = {
    BrowseItmesFilters:string[]
}

export type GetMarketPlaceResponse = StatusResponse & {
    Spotlight?:NFT[],
    BrowseItems?:NFT[]
}