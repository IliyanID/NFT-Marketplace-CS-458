import { useContext, useState } from "react"
import { useToggle } from "../hooks/useToggle"
import { DefaultUserState, UserContext } from "../context/UserContext"

export const useAuth = () => {
    const [loading,setLoading] = useState(false)
    const userState = useContext(UserContext)


    const login = (credentials:{username:string,password:string},call_complete:()=>void) => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            userState.LogIn({
                username:credentials.username,
                first_name:'test_first_name',
                last_name:'text_last_name',
                id:0,
                wallet_is_connected:false
            })
            call_complete()
        },1000)
    }
    return {
        loading,
        login
    }
}