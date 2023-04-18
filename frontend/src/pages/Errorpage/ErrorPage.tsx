export const ErrorPage = (props:{error?:string}) => {
    return (
        <div style={{
            width:'100vw',
            height:'100vh',
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
    )
}