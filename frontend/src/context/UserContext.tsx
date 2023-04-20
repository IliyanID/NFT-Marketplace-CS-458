import { createContext, useState } from "react";

export type UserLoggedIn = {
    logged_in:true,
    LogIn:(session:UserSession)=>void,
    LogOut:()=>void,
    session:UserSession
}
    export type UserSession = {
        username:string,
        first_name:string,
        last_name:string,
        id:number,
        wallet_is_connected:boolean
    }

    
export type UserLoggedOut = {
    logged_in:false,
    LogIn:(session:UserSession)=>void,
    LogOut:()=>void,
}

export const DefaultUserState:UserLoggedIn|UserLoggedOut = {logged_in:false,LogIn:()=>{},LogOut:()=>{}}

export const UserContext = createContext<UserLoggedIn|UserLoggedOut>(DefaultUserState)

export const UserContextProvider = (props:{children:JSX.Element | JSX.Element[]}) => {

    const [UserContextState,setUserContextState] = useState<UserLoggedIn|UserLoggedOut>({
        logged_in:false,
        LogIn:(session:UserSession)=>{
            let tmpState = {...UserContextState}
            tmpState={
                logged_in:true,
                LogIn:tmpState.LogIn,
                LogOut:tmpState.LogOut,
                session:session
            }
            setUserContextState(tmpState)
        },
        LogOut:()=>{
            let tmpState = {...UserContextState}
            tmpState={
                logged_in:false,
                LogIn:tmpState.LogIn,
                LogOut:tmpState.LogOut,
            }
            setUserContextState(tmpState)
        }
    })

    return (
        <UserContext.Provider value={UserContextState}>
            {props.children}
        </UserContext.Provider>
    )
}