import { FormEvent } from "react"
import { Button, Input } from "reactstrap"
import { AuthForm, RedirectArea } from "../../../components/AuthForm"
import { ToRegister, ToReset } from "../components/AuthRedirects"



export const Login = () => {
    const handleFormSubmit = (e:FormEvent) => {
        e.preventDefault()
    }
    return (
        <AuthForm 
            onSubmit={handleFormSubmit}
        >
                <Input required placeholder="Username"/>
                <Input required type="password" placeholder="Password"/>
                <Button type='submit' color="primary">Login</Button>
                <RedirectArea>
                    <ToRegister/>
                    <ToReset/>
                </RedirectArea>
                
                
        </AuthForm>
    )
}