import { Button, Input } from "reactstrap"
import { AuthForm, RedirectArea } from "../../components/AuthForm"
import { ToLogin, ToRegister } from "./components/AuthRedirects"

export const ResetPassword = () => {
    return (
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'100vh',
            width:'100vw',
            overflow:'hidden'
        }}>
            <AuthForm onSubmit={()=>{}}>
                <h2>Reset Password</h2>
                <Input required placeholder="Username"/>
                <Button color="primary">Reset</Button>
                <RedirectArea>
                    <ToRegister/>
                    <ToLogin/>
                </RedirectArea>
       
            </AuthForm>
        </div>

    )
}