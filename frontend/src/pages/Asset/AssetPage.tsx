import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import image from '../../static/images/test_image7.avif'
import { ethToUsd } from '../../utils/ethToUsd'
import { Button } from 'reactstrap'

export const AssetPage = () => {
    return (
        <div style={{
            height:'100vh',
            display:'grid',
            gridTemplateRows:'fit-content(400px) 1fr',
            width:'90vw',
            margin:'0 auto'
        }}>
            <Header/>
            <div style={{
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
                <ImagePreview/>
                <Details/>
                <Purchase/>
            </div>
  
        </div>
    )
}

const Details = () => {
    return (
        <div style={{gridArea:'details',padding:'20px',fontSize:'40px',fontWeight:'bolder'}}>
            Sunset Bullivard, 2020 #0
        </div>
    )
}

const Purchase = () => {
    const eth = .5

    const [usd,setUsd] = useState(0)
    useEffect(()=>{
        ethToUsd(eth).then(price=>setUsd(price))
    },[])

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
                <h1 style={{fontWeight:'bolder'}}>{eth} ETH</h1>
                <div style={{color:'var(--accent-color)'}}>${usd}</div>
            </div>
            <div style={{display:'flex',gap:'20px',width:'100%',marginTop:'20px'}}>
                <Button style={{width:'100%'}} color="primary">Buy</Button>
                <Button style={{width:'100%'}}>Add to Cart</Button>

            </div>
        </div>
    )
}

const ImagePreview = () => {
    return (
        <img
            style={{gridArea:'picture',borderRadius:'20px',overflow:'hidden'}}
            
            src={image}
        />
    )
}