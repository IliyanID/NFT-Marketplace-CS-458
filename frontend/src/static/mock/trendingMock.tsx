import { NFT } from '../../../../CommonTypes/CommonTypes'
import test_image from '../images/test_image.avif'
import test_image2 from '../images/test_image2.avif'
import test_image3 from '../images/test_image3.avif'
import test_image4 from '../images/test_image4.avif'
import test_image5 from '../images/test_image5.avif'
import test_image6 from '../images/test_image6.avif'

export const trendingMock:NFT[] = [
    {
        id:0,
        name:'ArbShibAI',
        owner:'Owner1',
        priceETH:.00001,
        priceUSD:20.20,
        nft_image:test_image
    },
    {
        id:1,
        name:'Nakamigos',
        owner:'Owner2',
        priceETH:.41,
        priceUSD:35.2,
        nft_image:test_image2
    },
    {
        id:2,
        name:'XXD34D',
        owner:'Owner3',
        priceETH:.02,
        priceUSD:52.2,
        nft_image:test_image3
    },
    {
        id:3,
        name:'Outlaws',
        owner:'Owner4',
        priceETH:.03,
        priceUSD:11.2,
        nft_image:test_image4
    },
    {
        id:4,
        name:'Muppeth',
        owner:'Owner1',
        priceETH:.05,
        priceUSD:22.22,
        nft_image:test_image5
    },
    {
        id:5,
        name:'Mutant Ape Yacht Club',
        owner:'Owner3',
        priceETH:12.11,
        priceUSD:11.2,
        nft_image:test_image6
    }
]