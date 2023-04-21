import { Input, Button } from "reactstrap"
import { AuthForm, FormError, RedirectArea } from "../../../components/AuthForm"
import { ToLogin, ToReset } from "../components/AuthRedirects"
import { useState } from "react"

const FormRejex = {
    username:{
        error_message:'Username must be at least five characters.',
        regex:/^[a-zA-Z0-9]{5,}$/
    },
    password:{
        regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        error_message:`
            Password must have:
            At least one lowercase letter
            At least one uppercase letter
            At least one digit
            At least one special character
            A Minimum length of 8 characters
        `
    },
    confirmed_password:{
        regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        error_message:`Passwords don't match`
    }

}

export const Register = () => {
    document.title = `NFT Marketplace - Register`
    const default_form = {
        username:'',
        password:'',
        confirmed_password:''
    }
    const [formState,setFormState] = useState(default_form)
    const [error,setError] = useState('')


    type defaultForm = typeof default_form
    type formKey = keyof defaultForm
    const validateForm = (formKey:formKey|undefined,value:string|undefined,hideError?:boolean) => {
        let tmpFormState = {...formState}
        if(formKey && value!==undefined && !hideError){
            tmpFormState[formKey] = value
            setFormState(tmpFormState)
        }




        const errors = Object.keys(tmpFormState).map((i)=>{
            const key = i as formKey
            const value = tmpFormState[key]
            if(key === 'confirmed_password' && tmpFormState['password'] !== value){
                return FormRejex['confirmed_password'].error_message
            }
            
            const valid = FormRejex[key].regex.test(value)
            if(!valid){
                return FormRejex[key].error_message
            }
            return ''
        }).filter(a=>a!=='')

        if(hideError){
            return error.length === 0
        }
        if(errors.length > 0)
            setError(errors[0])
        else
            setError('')
  

    }
    return (
        <AuthForm onSubmit={()=>{}}>
            <Input value={formState['username']} onChange={(e)=>validateForm('username',e.target.value)} required placeholder="Username"/>
            <Input value={formState['password']} onChange={(e)=>validateForm('password',e.target.value)} required type="password" placeholder="Password"/>
            <Input value={formState['confirmed_password']} onChange={(e)=>validateForm('confirmed_password',e.target.value)} required type="password" placeholder="Confirm Password"/>
            <Button disabled={error.length > 0 || validateForm('username','',true)} type="submit" color="primary">Register Account</Button>
            <FormError error={error}/>
            <RedirectArea>
                <ToLogin/>
                <ToReset/>
            </RedirectArea>
    
        </AuthForm>
    )

}