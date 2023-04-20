import { Link } from "react-router-dom"

export const ToLogin = () => {
    return (
        <span>Back to <Link style={{textDecoration:'none'}} to="/auth/login">Login?</Link></span>
    )
}

export const ToReset = () => {
    return (
        <span>
            Forgot <Link style={{textDecoration:'none',cursor:'pointer'}} to="/auth/resetpassword">password?</Link>
        </span>
    )
}

export const ToRegister = () => {
    return (
        <span>
            Don't have an account? <Link style={{textDecoration:'none',cursor:'pointer'}} to="/auth/register">Create one</Link>
        </span>
    )
}