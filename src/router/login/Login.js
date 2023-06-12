import React from 'react'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../api/index'
import { AiFillEye, AiFillEyeInvisible, AiFillLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false),
        [username, setUsername] = React.useState(""),
        [email, setEmail] = React.useState(""),
        [password, setPassword] = React.useState(""),
        [registration, setRegistration] = React.useState(true)


    const handleSubmitSignup = (e) => {
        e.preventDefault()
        const newUser = {
            email, username, password,
        }
        axios.post("/admin/sign-up", newUser)
            .then((res) => {
                toast.success(res.data.msg)
                setEmail("")
                setPassword("")
                setUsername("")
            })
            .catch(err => console.log(err))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const user_data = {
            username, password
        }

        axios.post("/admin/sign-in", user_data)
            .then((res) => {
                toast.success(res.data.msg)
                if (res.data.innerData) {
                    localStorage.setItem("user", JSON.stringify(res.data.innerData.admin))
                    localStorage.setItem("x-auth-token", res.data.innerData.token)
                }
                setEmail("")
                setPassword("")
                setUsername("")
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div className='login_page'>
            <div className="login_page-box">
                <h4>Choose your type</h4>
                <div className="login-page_box_text_container">
                    <h6>Hello Doctor !</h6>
                    <h6>  Please fill out the form below to get started</h6>
                </div>
                {
                    registration ?
                        <form className="login_page-form" onSubmit={handleSubmitSignup}>
                            <div className="login_page-input-container">
                                <AiOutlineMail />
                                <input autoComplete='username' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' />
                            </div>
                            <div className="login_page-input-container">
                                <AiOutlineUser />
                                <input autoComplete='username' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
                            </div>
                            <div className="login_page-input-container">
                                <AiFillLock />
                                <input autoComplete='current-password' type={showPassword ? "type" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                                {
                                    showPassword ? <AiFillEye onClick={() => setShowPassword(!showPassword)} /> : <AiFillEyeInvisible onClick={() => setShowPassword(!showPassword)} />
                                }
                            </div>
                            <button className="login_page-form-btn">Login</button>
                            <a onClick={() => {
                                setEmail("")
                                setPassword("")
                                setUsername("")
                                setRegistration(false)
                            }}>
                                Login
                            </a>
                        </form>

                        :

                        <form action="" className="login_page-form" onSubmit={handleSubmit}>
                            <div className="login_page-input-container">
                                <AiOutlineUser />
                                <input autoComplete='username' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
                            </div>

                            <div className="login_page-input-container">
                                <AiFillLock />
                                <input autoComplete='current-password' type={showPassword ? "type" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                                {
                                    showPassword ? <AiFillEye onClick={() => setShowPassword(!showPassword)} /> : <AiFillEyeInvisible onClick={() => setShowPassword(!showPassword)} />
                                }
                            </div>
                            <button className="login_page-form-btn">Login</button>
                            <a onClick={() => {
                                setEmail("")
                                setPassword("")
                                setUsername("")
                                setRegistration(true)
                            }}>
                                Create new account
                            </a>
                        </form>
                }


            </div>
            <>
                <ul className="login_page_background">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </>
            <ToastContainer />
        </div >
    )
}

export default Login
