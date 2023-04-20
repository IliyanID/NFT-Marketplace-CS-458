import { Header } from "../../components/Header"
import { SpotlightDisplayMock } from "../../static/mock/SpotlightDisplayMock"
import { BrowseItems } from "./container/BrowseItems/BrowseItems"
import { SpotlightDisplay } from "./container/SpotlightDisplay/SpotlightDisplay"


export const Marketplace = () => {
    return (
        <div >

            <img style={{
                height:'40vh',
                width:'100vw',
                zIndex:'0',
                position:'absolute',
                top:'0px',
                left:'0px'
            }} src={SpotlightDisplayMock[0].nft} alt={SpotlightDisplayMock[0].owner}/>
            <div 
                className="BlurEffect"

                style={{
                    display:'grid',
                    gridTemplateRows:'fit-content(400px) 40vh 1fr',
                    gap:'20px',
                    maxHeight:'100vh',
                    overflowY:'auto',
                    overflowX:'hidden',
                    justifyContent:'center',
                    zIndex:'2'
                }}
            >
                <Header/>
                <SpotlightDisplay/>
                <BrowseItems/>
            </div>
        </div>
    )
}