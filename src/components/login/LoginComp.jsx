import React from 'react'
import { ReactComponent as Logo } from '../../assests/images/logo.svg'
import style from './style.module.css'
import { MyButton } from '../button'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { isUserLogin } from '../../utilities/user'
import { IoSearchOutline } from "react-icons/io5";

export const LoginDiv = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [search, setSearch] = useState("")
    // const [rememberMe, setRemeberMe] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }


    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        setIsSubmitting(true)
        const payload = {
            username: email,
            password: password,
            // rememberMe
        }
        console.log({ payload }, "I'm inside")
        //Login user and get token
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
            //note that payload is defined already, the object details can be used directly here
        })

            /*    .then(response => response.json())
                .then(async (response)=>{
                   if (response.status !==200){ 
                    const data =await response.json()
                    throw data
                }
            })
                .then(async(response)=>{
                    if (response.status >= 400){
                        const data= await  response.json()
                        throw data
                    }
                }) */
            /*    const data = await response.json();
                if (response.status >= 400) {
                    toast.error(error.message)
                    setError(error.message)
                } else {
                    console.log('Success', response)
                    localStorage.setItem('user', JSON.stringify(response))
                    window.location.href = routes.dashboard()
                }
                setIsSubmitting(false)
                
        
                .then((response) => {
                    return new Promise((resolve, reject) => {
                        if (response.status >= 400) {
                            reject(response.json())
                            return
                        }
                        resolve(response.json())
                    })
                }) */

            .then((response) => {
                console.log('Success', response)
                localStorage.setItem('user', JSON.stringify(response))
                // window.location.href = routes.dashboard()
                console.log(response)
            })
            .catch((error) => {
                console.log("Failed", error.message)
                toast(error.message)
                setError(error.message)
            })
            .finally(() => {
                setIsSubmitting(false)
            })
            .then(console.log);
    }

    useEffect(() => {
        const user = isUserLogin()
        if (user) {
            // window.location.href = routes.dashboard()
            console.log('welcome')
        }
    }, [])
    return (
        <div className={style.loginContainer}>
            <header className={style.header}>
                <CustomInput onChange={handleSearch} type="search" placeholder="Search for anything here.." className={style.search} />
            </header>
            <main className={style.main}>
                {error && <div className={style.error}>{error}</div>}
                <div className={style.inputs}>
                    <CustomInput onChange={handleEmail} type="email" placeholder="Username" label={"Username"} />
                    <CustomInput onChange={handlePassword} type="password" placeholder="Password" label={"Password"} className={style.passwordDiv} />
                </div>
                {/* <MyButton  type='primary' title='LOGIN'/> */}
                <MyButton type='primary' className={style.loginBtn} title='LOG IN'
                    onClick={handleLogin}
                    disabled={isSubmitting} />
            </main>
        </div>
    )
}
export const LogoDiv = () => {
    return (
        <div><Logo /></div>
    )
}

export const CustomInput = ({ ...props }) => {
    const [show, setShow] = React.useState(false)
    let label = props.label
    let type = props.type


    if (props.type === 'password') {
        type = !show ? 'password' : 'text'
    }
    const handleIconToggle = () => {
        setShow(!show)
    }
    // const hideShowToggle=()=}{

    // }
    // <div className={style.inputDiv}>
    //         <label>{label}</label>
    //         <div className={style.inputFieldDiv}></div>
    return (
        <div className={style.inputDiv}>
            {type === 'search' ?
                <div className={style.inputFieldDiv}>
                    <input {...props} type={type} className={style.search}/>
                    <div className={style.icon}>
                        <IoSearchOutline />
                    </div>
                </div> :
                <div >
                    <label>{label}</label>
                    <div className={style.inputFieldDiv}>
                        <input {...props} type={type} />
                        {
                            props.type === 'password' &&
                            <div onClick={handleIconToggle} className={style.icon}>
                                {
                                    !show ?
                                        <FaRegEyeSlash /> :
                                        <FaRegEye />
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}