import { SpotlightDetails } from './containers/SpotlightDetails'
import './pulsatingDot.css'

export const SpotlightDisplay = () => {

    return (
        <div style={{
            display:'grid',
            gridTemplateColumns:'fit-content(400px) 1fr',
            backgroundColor:'black'
        }}>
            <SpotlightDetails/>
            <div></div>
        </div>
    )
}





