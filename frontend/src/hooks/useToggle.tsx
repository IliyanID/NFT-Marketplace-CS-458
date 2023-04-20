import { useState } from "react";

export const useToggle = (initial?:boolean):[boolean,()=>void,(new_value:boolean)=>void] => {
    const [state,setState] = useState(!!initial)
    const toggle = () => {setState(!state)}
    return [state,toggle,setState]
}