import { Header } from "../../components/Header"

export const ErrorPage = (props:{error?:string}) => {
    return (
        <div style={{
            width:'100vw',
            height:'90vh',
            display:'grid',
            gridAutoRows:'fit-content(200px) 1fr'
        }}>
            <Header/>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:'30px',
                flexDirection:'column'
            }}>
                <h1>Oops!</h1>
                <div>Sorry, an unexpected error occured.</div>
                <small>{props.error}</small>
            </div>

        </div>
    )
}