import { PropagateLoader } from "react-spinners"

export const LoadingScreen = () => {
    return (
        <div style={{
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <PropagateLoader size={20} color="#36d7b7" />
        </div>
    )
}