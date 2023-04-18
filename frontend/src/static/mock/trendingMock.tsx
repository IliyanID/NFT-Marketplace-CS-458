import { NFT } from '../../types/NFT'
import test_image from '../images/test_image.avif'
import test_image2 from '../images/test_image2.avif'
import test_image3 from '../images/test_image3.avif'
import test_image4 from '../images/test_image4.avif'
import test_image5 from '../images/test_image5.avif'
import test_image6 from '../images/test_image6.avif'

export const trendingMock:NFT[] = [
    {
        id:0,
        owner:'ArbShibAI',
        price:.00001,
        nft:test_image
    },
    {
        id:1,
        owner:'Nakamigos',
        price:.41,
        nft:test_image2
    },
    {
        id:2,
        owner:'XXD34D',
        price:.02,
        nft:test_image3
    },
    {
        id:3,
        owner:'Outlaws',
        price:.03,
        nft:test_image4
    },
    {
        id:4,
        owner:'Muppeth',
        price:.05,
        nft:test_image5
    },
    {
        id:5,
        owner:'Mutant Ape Yacht Club',
        price:12.11,
        nft:test_image6
    }
]