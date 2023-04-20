import { FormEvent, useContext } from "react"
import { Button, Input } from "reactstrap"
import { AuthForm, RedirectArea } from "../../../components/AuthForm"
import { ToRegister, ToReset } from "../components/AuthRedirects"
import { useTextInput } from "../../../hooks/useFormHooks"
import { UserContext } from "../../../context/UserContext"
import { useToggle } from "../../../hooks/useToggle"
import { useNavigate } from "react-router-dom"



export const Login = () => {
    const [username,handleUsernameInput] = useTextInput()
    const [password,handlePasswordInput] = useTextInput()
    const userState = useContext(UserContext)
    const [isLoading,toggleLoading] = useToggle()
    const navigate = useNavigate()

    const form_complete = username.length > 0 && password.length > 0

    const handleFormSubmit = (e:FormEvent) => {
        e.preventDefault()
        userState.LogIn({
            username,
            first_name:'test_first_name',
            last_name:'text_last_name',
            id:0,
            wallet_is_connected:false
        })
        navigate('/')
    }
    return (
        <AuthForm 
            onSubmit={handleFormSubmit}
        >
                <Input onChange={handleUsernameInput} value={username} required placeholder="Username"/>
                <Input onChange={handlePasswordInput} value={password} required type="password" placeholder="Password"/>
                <Button disabled={!form_complete} type='submit' color="primary">Login</Button>
                <RedirectArea>
                    <ToRegister/>
                    <ToReset/>
                </RedirectArea>
                
                
        </AuthForm>
    )
}