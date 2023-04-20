import { useState } from "react"

export const useTextInput = ():[string,(e:React.ChangeEvent<HTMLInputElement>)=>void,(e:string)=>void] => {
    const [state,setState] = useState('')
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }
    return [state,handleInput,setState]
}