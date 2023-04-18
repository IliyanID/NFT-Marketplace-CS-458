import { motion } from "framer-motion"
import { FormEvent } from "react"

export const AuthForm = (props:{children:JSX.Element[],onSubmit:(e:FormEvent)=>void}) => {
    return (
        <motion.form
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:.3}}
            onSubmit={props.onSubmit}
            style={{
                minWidth:'400px',
                minHeight:'400px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
                gap:'15px',
                padding:'10px'
            }}
        >
            {props.children}
        </motion.form>
    )
}

export const RedirectArea = (props:{children:JSX.Element[]}) => {
    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            gap:'10px',
            marginTop:'30px'
        }}>
            {props.children}
        </div>
    )
}

export const FormError = (props:{error:string}) => {
    if(!props.error)
        return <></>
    return (
        <div style={{border:'2px solid red',borderRadius:'20px',width:'400px',padding:'20px',whiteSpace:'pre-wrap'}}>
            {props.error}
        </div>
    )
}