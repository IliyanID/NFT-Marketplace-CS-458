export const ToLogin = () => {
    return (
        <span>Back to <a style={{textDecoration:'none'}} href="/login">Login?</a></span>
    )
}

export const ToReset = () => {
    return (
        <span>
            Forgot <a style={{textDecoration:'none',cursor:'pointer'}} href="/resetpassword">password?</a>
        </span>
    )
}

export const ToRegister = () => {
    return (
        <span>
            Don't have an account? <a style={{textDecoration:'none',cursor:'pointer'}} href="/register">Create one</a>
        </span>
    )
}