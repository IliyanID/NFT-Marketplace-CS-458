import testImage7 from '../images/test_image7.avif'
//import testImage8 from '../images/test_image8.avif'
import testImage9 from '../images/test_image9.avif'
//import testImage10 from '../images/test_image10.avif'
import testImage11 from '../images/test_image11.avif'
import { NFT } from '../../../../CommonTypes/CommonTypes'

export const SpotlightDisplayMock:NFT[] = [
    {
        id:0,
        owner:'Owner1',
        name:'Sea of Voices, 2021',
        nft_image:testImage7,
        priceETH:.5,
        priceUSD:800.25
    },
    {
        id:1,
        owner:'Owner1',
        name:'Wild at Heart, 2021',
        nft_image:testImage11,
        priceETH:.05,
        priceUSD:800.25
    },
    {
        id:2,
        name:'Shadow of Doubt, 2021',
        owner:'Owner1',
        nft_image:testImage9,
        priceETH:.33,
        priceUSD:423.23
    },
    /*{
        id:3,
        owner: 'Shadow of Doubt, 2022',
        nft:testImage10,
        price:.33
    },
    {
        id:4,
        owner: 'A walk, 2023',
        nft:testImage11,
        price:.44
    }*/
]