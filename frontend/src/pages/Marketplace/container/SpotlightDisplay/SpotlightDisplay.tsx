import { useRef } from 'react';
import { SpotlightDetails } from './containers/SpotlightDetails'
import './pulsatingDot.css'
import { Canvas, useFrame } from "@react-three/fiber";
import { Button } from 'reactstrap';
export const SpotlightDisplay = () => {

    return (
        <div style={{
            display:'grid',
            gridTemplateColumns:'fit-content(400px) 1fr',
            backgroundColor:'black',
            width:'90vw',
            borderRadius:'20px',
            position:'relative'
        }}>
            <SpotlightDetails/>
            <Canvas>
                
                <Box color="#EE6B99" position={[0, 0, 4]} />
                <directionalLight color="#ffffff" intensity={1} position={[-1, 2, 4]} />
            </Canvas>

            <Button style={{position:'absolute',right:'15px',bottom:'15px'}}>View Details</Button>

        </div>
    )
}

function Box(props:{position:any, color:any}) {
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
  }



