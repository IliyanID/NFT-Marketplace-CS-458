import { FormEvent } from "react"
import { Button, Input } from "reactstrap"
import { AuthForm, RedirectArea } from "../../../components/AuthForm"
import { ToRegister, ToReset } from "../components/AuthRedirects"
import { useTextInput } from "../../../hooks/useFormHooks"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../services/auth"
import { BarLoader } from "react-spinners"



export const Login = () => {
    const [username,handleUsernameInput] = useTextInput()
    const [password,handlePasswordInput] = useTextInput()
    const navigate = useNavigate()
    const auth_api = useAuth()

    const form_complete = username.length > 0 && password.length > 0

    const handleFormSubmit = (e:FormEvent) => {
        e.preventDefault()
        if(!form_complete)
            return
        auth_api.login({username,password},()=>{
            navigate('/')
        })
    }
    return (
        <AuthForm 
            onSubmit={handleFormSubmit}
        >
                <Input onChange={handleUsernameInput} value={username} required placeholder="Username"/>
                <Input onChange={handlePasswordInput} value={password} required type="password" placeholder="Password"/>
                <Button disabled={!form_complete || auth_api.loading} type='submit' style={{height:'40px',width:'130px'}} color="primary">{(auth_api.loading)?<BarLoader/>:'Login'}</Button>
                <RedirectArea>
                    <ToRegister/>
                    <ToReset/>
                </RedirectArea>
                
                
        </AuthForm>
    )
}

