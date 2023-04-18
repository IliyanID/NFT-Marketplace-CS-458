import { NFT } from "../../../../../types/NFT"

export const BrowseTable = (props:{children:JSX.Element[]}) => {
    return(
        <div style={{
            display:'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(700px, 1fr))',
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
    return (
        <div key={id} style={{
            height:'150px',
            display:'grid',
            gridTemplateColumns:' 40px fit-content(200px) 1fr 1fr',
            alignItems:'center',
            gap:'15px',
            cursor:'pointer'
        }}>
            <div style={{fontSize:'25px'}}>{props.index+1}.</div>
            <img style={{width:'80px',height:'80px',borderRadius:'15px'}} src={props.nft.nft} alt={'test'}/>
            <div style={{fontWeight:'bold'}}>{props.nft.owner}</div>
            <div style={{fontWeight:"bold"}}>{price} ETH</div>
            
        </div>
    )
}