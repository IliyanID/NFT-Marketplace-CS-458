import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Button } from 'reactstrap'
import { useMarketPlace } from 'src/services/marketplace'
import { NFT } from 'src/CommonTypes/CommonTypes'
import { LoadingScreen } from 'src/components/LoadingScreen'
import { motion } from 'framer-motion'
import { ErrorPage } from '../Errorpage/ErrorPage'
import { useParams, useNavigate } from 'react-router-dom'
import { init } from '../../services/lib/ethers'

let buyNFT:any = undefined
if(window.ethereum !== undefined)
    buyNFT = init(window.ethereum).buyNFT

export const AssetPage = () => {
    const api = useMarketPlace()
    const [NFT,setNFT] = useState<NFT|undefined>()
    const { id } = useParams();
    const navigate = useNavigate()
    const id_is_invalid = id === undefined || isNaN(parseInt(id))
    useEffect(()=>{
        if(id_is_invalid){
            navigate('/')
            return
        }
        api.getAsset(parseInt(id),(response)=>{
            if(response.NFT){
                setNFT(response.NFT)
                document.title = `${response.NFT.name} - ${response.NFT.priceETH} ETH`
            }
        })
    },[])
    
    //@ts-ignore
    if(window.ethereum === undefined){
        return <ErrorPage error='Web3 wallet not installed. Please install and link your wallet.'/>
    }

    return (
        <div 
        style={{
            height:'100vh',
            display:'grid',
            gridTemplateRows:'fit-content(400px) 1fr',
            width:'90vw',
            margin:'0 auto'
        }}>
            <Header/>

            {
                (api.loading || NFT === undefined)?<LoadingScreen inGrid/>:<LoadedAssetPage NFT={NFT}/>
            }
  
        </div>
    )
}

const LoadedAssetPage = (props:{NFT:NFT}) => {
    return (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            style={{
                display:'grid',
                gridTemplateAreas:`
                    'picture details'
                    'picture purchase'
                `,
                gridTemplateColumns:'fit-content(1000px) 1fr',
                gridTemplateRows:'fit-content(500px) 1fr',
                gap:'20px',
                margin:'40px',
                maxHeight:'100%',
                overflow:'hidden',
                
            }}>
                <ImagePreview NFT={props.NFT}/>
                <Details NFT={props.NFT}/>
                <Purchase NFT={props.NFT}/>
            </motion.div>
    )
}

const Details = (props:{NFT:NFT}) => {
    return (
        <div style={{gridArea:'details',padding:'20px',fontSize:'40px',fontWeight:'bolder'}}>
            {props.NFT.name}, {props.NFT.owner} #{props.NFT.id}
        </div>
    )
}

const Purchase = (props:{NFT:NFT}) => {
    const { id } = useParams();

    const buyToken = async () => {
        try {
            await buyNFT(id);
            alert("you have successfully bought the token!");
            window.location.reload()
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <div 
            style={{
                border:'1px solid var(--secondary-color)',
                borderRadius:'20px',
                gridArea:'purchase',
                display:'flex',
                alignItems:'space-between',
                justifyContent:'center',
                flexDirection:'column',
                padding:'40px',
                height:'fit-content',
                margin:'auto 0px'
            }}
        >
            <div style={{color:'var(--accent-color)',width:'100%',fontSize:'20px'}}>Current Price:</div>
            <div style={{width:'100%',display:'flex',alignItems:'center',gap:'20px'}}>
                <h1 style={{fontWeight:'bolder'}}>{props.NFT.priceETH} ETH</h1>
                <div style={{color:'var(--accent-color)'}}>${props.NFT.priceUSD}</div>
            </div>
            <div style={{display:'flex',gap:'20px',width:'100%',marginTop:'20px'}}>
                <Button onClick={buyToken} style={{width:'100%'}} color="primary">Buy</Button>
                <Button style={{width:'100%'}}>Add to Cart</Button>

            </div>
        </div>
    )
}

const ImagePreview = (props:{NFT:NFT}) => {
    return (
        <img
            style={{gridArea:'picture',borderRadius:'20px',overflow:'hidden'}}
            alt={props.NFT.name}
            src={props.NFT.nft_image}
        />
    )
}