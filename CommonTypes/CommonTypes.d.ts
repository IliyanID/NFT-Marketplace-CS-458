export enum STATUS{
    success=0,
    info=1,
    warning=2,
    error=3
}

export type StatusResponse = {
    status:STATUS,
    message?:string
}

export type NFT = {
    id:number,
    owner:string,
    name:string,
    priceETH:number,
    priceUSD:number,
    nft_image:string
}