import { Route, Routes, useNavigate } from "react-router-dom"
import { Login } from "./containers/Login"
import { Register } from "./containers/Register"
import { ResetPassword } from "./containers/ResetPassword"

export const AuthPage = () => {
    return (
        
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-start',
            height:'100vh',
            width:'100vw',
            overflow:'hidden',
            flexDirection:'column',
            position:'relative',
        }}>
            <Title/>
            <Routes >
                <Route path="login" element={<Login/>}/>
                <Route path="resetpassword" element={<ResetPassword/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
           
        </div>

            
    
    )
}

export const Title = () => {
    const navigate = useNavigate()
    return (
        <div 
        onClick={()=>navigate('/')}
        style={{
          alignSelf:'flex-start',
          width:'100vw',
          paddingTop:'30px',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column',
          fontFamily:'Rajdhani, Orbitron, sans-serif',
          cursor:'pointer',
          userSelect:'none'
        }}>
          <div style={{
            fontFamily:'Rajdhani, Orbitron, sans-serif',
            fontSize:'50px',
            color:'var(--secondary-color)',
        }}>
            NFT Marketplace

          </div>
            <span style={{
            fontFamily:'Rajdhani, Orbitron, sans-serif',
            fontSize:'20px'
            }}>
              Your Gateway to the Digital Art World
            </span>
        </div>
    )
}