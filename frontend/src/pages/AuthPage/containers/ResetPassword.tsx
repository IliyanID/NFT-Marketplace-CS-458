import { Button, Input } from "reactstrap"
import { AuthForm, RedirectArea } from "../../../components/AuthForm"
import { ToLogin, ToRegister } from "../components/AuthRedirects"

export const ResetPassword = () => {
    return (
        <AuthForm onSubmit={()=>{}}>
            <Input required placeholder="Username"/>
            <Button color="primary">Reset Password</Button>
            <RedirectArea>
                <ToRegister/>
                <ToLogin/>
            </RedirectArea>
    
        </AuthForm>

    )
}