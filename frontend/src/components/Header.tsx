import { Button } from "reactstrap"
import './Header.css'

export const Header = () => {
    return (
        <div
        className="Header"
        style={{
            borderRadius:'20px',
            position:'absolute',
            top:'10px',
            left:'50%',
            transform:'translateX(-50%)',
            width:'calc(100vw - 20px)',
            zIndex:'9999',
            padding:'10px',
            display:'grid',
            justifyContent:'right'
        }}>
            <Button onClick={()=>{window.location.href='/auth/login'}} color="primary">Login</Button>
        </div>
    )
}