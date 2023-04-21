import { PropagateLoader } from "react-spinners"

export const LoadingScreen = (props:{inGrid?:boolean}) => {
    return (
        <div style={{
            width:'100%',
            height:props.inGrid?'100%':'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <PropagateLoader size={20} color="#36d7b7" />
        </div>
    )
}