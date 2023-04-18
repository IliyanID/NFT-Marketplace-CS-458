import { FormEvent } from "react"
import { Button, Input } from "reactstrap"
import { AuthForm, RedirectArea } from "../../components/AuthForm"
import { ToRegister, ToReset } from "./components/AuthRedirects"

export const Login = () => {
    return (
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'100vh',
            width:'100vw',
            overflow:'hidden'
        }}>
            <LoginForm/>
        </div>
    )
}

const LoginForm = () => {
    const handleFormSubmit = (e:FormEvent) => {
        e.preventDefault()
    }
    return (
        <AuthForm 
            onSubmit={handleFormSubmit}
        >
                <h2>Login</h2>
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