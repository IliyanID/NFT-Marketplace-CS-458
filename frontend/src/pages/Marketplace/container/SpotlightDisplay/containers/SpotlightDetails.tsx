import spotlightImage from '../../../../../static/images/header_image.avif'


export const SpotlightDetails = () => {
    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            margin:'20px',
            position:'relative'
        }}>
            <img style={{width:'100px',height:'100px',border:'3px solid var(--secondary-color)',borderRadius:'20px'}} src={spotlightImage} alt="spotlightcube"/>
            <div style={{fontSize:'50px'}}>Gemesis</div>
            <div>By OpenSeaPro</div>
            <MintedButton/>
        </div>
    )
}

export const MintedButton = () => {
    return (
        <div 
            style={{
                backgroundColor:'var(--accent-color)',
                fontSize:'24px',
                borderRadius:'20px',
                padding:'10px 15px',
                marginTop:'20px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:'10px'
            }}>
            <div className='pulsatingDot' />
            Minted Now
        </div>
    )
}