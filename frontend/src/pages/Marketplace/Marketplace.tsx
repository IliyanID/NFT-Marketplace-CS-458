import { useState } from "react"
import { Header } from "../../components/Header"
import { SpotlightDisplayMock } from "../../static/mock/SpotlightDisplayMock"
import { BrowseItems } from "./container/BrowseItems/BrowseItems"
import { SpotlightDisplay } from "./container/SpotlightDisplay/SpotlightDisplay"
import { motion } from "framer-motion"


export const Marketplace = () => {
    const [HoveredDisplay,setHoveredDisplay] = useState(0)
    return (
        <div >
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
        </div>
    )
}

const BackgroundBlurImage = (props:{HoveredDisplay:number}) => {
    return (
        <motion.img 
            key={SpotlightDisplayMock[props.HoveredDisplay].owner}
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
            }} src={SpotlightDisplayMock[props.HoveredDisplay].nft} alt={SpotlightDisplayMock[props.HoveredDisplay].owner}/>
    )
}