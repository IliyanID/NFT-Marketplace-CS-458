export const ToLogin = () => {
    return (
        <span>Back to <a style={{textDecoration:'none'}} href="/auth/login">Login?</a></span>
    )
}

export const ToReset = () => {
    return (
        <span>
            Forgot <a style={{textDecoration:'none',cursor:'pointer'}} href="/auth/resetpassword">password?</a>
        </span>
    )
}

export const ToRegister = () => {
    return (
        <span>
            Don't have an account? <a style={{textDecoration:'none',cursor:'pointer'}} href="/auth/register">Create one</a>
        </span>
    )
}