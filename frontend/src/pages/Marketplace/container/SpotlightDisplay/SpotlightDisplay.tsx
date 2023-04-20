import './pulsatingDot.css'
import { SpotlightDisplayMock } from '../../../../static/mock/SpotlightDisplayMock';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export const SpotlightDisplay = (props:{setHoveredDisplay:(index:number)=>void}) => {
    const navigate = useNavigate()
    return (
        <div style={{
            borderRadius:'20px',
            position:'relative',
            overflow:'hidden',
            maxHeight:'100%',
            width:'90vw',
            display:'flex',
            flexFlow:'row',
            gap:'20px'
        }}>
            {
                SpotlightDisplayMock.map((nft,index)=>{
                    const id = `ScrollSpotlight=${index}`
                    return (
                        <div 
                            onMouseEnter={()=>props.setHoveredDisplay(index)}
                            id={id}
                            key={id}
                            style={{
                                position:'relative',
                                overflow:'hidden',
                                borderRadius:'20px',
                                flex:1,
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                cursor:'pointer'
                            }}
                            onClick={()=>navigate(`/asset/${nft.id}`)}
                        >
         
                            <motion.img 
                                whileHover={{scaleX:1.2,scaleY:1.2}}
                                style={{
                                  objectFit:'cover'
                                }}
                                src={nft.nft} 
                                alt={nft.owner}
                            />
                            <div style={{
                                position:'absolute',
                                bottom:'10px',
                                left:'10px',
                                overflow:'hidden',
                            }}>
                                <h5 style={{fontWeight:'bolder'}}>{nft.owner}</h5>
                                <div>Price: {nft.price}</div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

/*
            <SpotlightDetails/>
            <Canvas>
                
                <Box color="#EE6B99" position={[0, 0, 4]} />
                <directionalLight color="#ffffff" intensity={1} position={[-1, 2, 4]} />
            </Canvas>

            <Button style={{position:'absolute',right:'15px',bottom:'15px'}}>View Details</Button>

*/

/*function Box(props:{position:any, color:any}) {
    const {position,color} = props
    const ref = useRef()
    //@ts-ignore
    useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  
    //@ts-ignore
    return (<mesh position={position} ref={ref}>
        <boxBufferGeometry args={[1, 1, .1]} attach="geometry" />
        <meshPhongMaterial color={color} attach="material" />
      </mesh>
    )
  }*/



