import { motion } from "framer-motion"
import { NFT } from "../../../../../types/NFT"
import { useNavigate } from "react-router-dom"

export const BrowseTable = (props:{children:JSX.Element[]}) => {
    return(
        <div style={{
            display:'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            margin:'20px'
        }}>
            {props.children}
        </div>
    )
}



export const BrowseTableTr = (props:{index:number,nft:NFT}) => {
    const id = `BrowseTableTr=${props.index}`
    let price = String(props.nft.price)
    if(props.nft.price <= .01)
        price = '< 0.01'
    const navigate = useNavigate()
    return (
        <motion.div key={id} 
            onClick={()=>navigate(`/asset/${props.nft.id}`)}
            whileHover={{backgroundColor:'var(--accent-color)'}}
            style={{
                height:'100px',
                display:'grid',
                gridTemplateColumns:' 40px fit-content(200px) 1fr 1fr',
                alignItems:'center',
                gap:'15px',
                cursor:'pointer',
                padding:'10px',
                borderRadius:'20px'
            }}
        >
            <div style={{fontSize:'25px'}}>{props.index+1}.</div>
            <img style={{width:'80px',height:'80px',borderRadius:'15px'}} src={props.nft.nft} alt={'test'}/>
            <div style={{fontWeight:'bold'}}>{props.nft.owner}</div>
            <div style={{fontWeight:"bold"}}>{price} ETH</div>
            
        </motion.div>
    )
}