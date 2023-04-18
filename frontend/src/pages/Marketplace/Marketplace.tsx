import { Header } from "../../components/Header"
import { BrowseItems } from "./container/BrowseItems/BrowseItems"
import { SpotlightDisplay } from "./container/SpotlightDisplay/SpotlightDisplay"

export const Marketplace = () => {
    return (
        <div style={{
            display:'grid',
            gridTemplateRows:'50vh 1fr',
            maxHeight:'100vh',
            overflow:'auto',
            justifyContent:'center',
            margin:'20px'
        }}>
            <Header/>
            <SpotlightDisplay/>
            <BrowseItems/>
        </div>
    )
}