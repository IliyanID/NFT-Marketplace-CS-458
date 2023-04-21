import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { BrowseItems } from "./container/BrowseItems/BrowseItems"
import { SpotlightDisplay } from "./container/SpotlightDisplay/SpotlightDisplay"
import { motion } from "framer-motion"
import { MarketPlaceContext } from "../../context/MarketPlaceContext"
import { useMarketPlace } from "../../services/marketplace"
import { LoadingScreen } from "src/components/LoadingScreen"


export const Marketplace = () => {
    const [HoveredDisplay,setHoveredDisplay] = useState(0)
    const state = useContext(MarketPlaceContext)
    const api = useMarketPlace()

    useEffect(()=>{
        api.getMarketPlace((response)=>{
            let newState = {...state}
            if(response.BrowseItems && response.BrowseItems.length > 0)
                newState.BrowseItems = response.BrowseItems
            if(response.Spotlight && response.Spotlight.length > 0)
                newState.Spotlight = response.Spotlight
            state.setState(newState)
            document.title = 'NFT Marketplace'
        })
    },[])
    if(api.loading && (state.BrowseItems.length === 0 || state.Spotlight.length === 0))
        return (<LoadingScreen/>)
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <BackgroundBlurImage HoveredDisplay={HoveredDisplay}/>
            <div 
                className="BlurEffect"

                style={{
                    display:'grid',
                    gridTemplateRows:'fit-content(400px) 40vh 1fr',
                    gap:'20px',
                    height:'100vh',
                    overflowY:'auto',
                    overflowX:'hidden',
                    justifyContent:'center',
                    zIndex:'2'
                }}
            >
                <Header/>
                <SpotlightDisplay setHoveredDisplay={setHoveredDisplay}/>
                <BrowseItems/>
            </div>
        </motion.div>
    )
}

const BackgroundBlurImage = (props:{HoveredDisplay:number}) => {
    const {Spotlight} = useContext(MarketPlaceContext)
    if(Spotlight.length === 0)
        return <></>

    return (
        <motion.img 
            key={Spotlight[props.HoveredDisplay].owner}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:1}}
            style={{
                height:'40vh',
                width:'100vw',
                zIndex:'0',
                position:'absolute',
                top:'0px',
                left:'0px'
            }} src={Spotlight[props.HoveredDisplay].nft_image} alt={Spotlight[props.HoveredDisplay].owner}/>
    )
}