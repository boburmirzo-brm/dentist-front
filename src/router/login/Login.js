import React from 'react'
import './Login.css'
import { AiFillEye, AiFillEyeInvisible, AiFillLock, AiOutlineUser } from 'react-icons/ai'

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false),
        [username, setUsername] = React.useState(""),
        [password, setPassword] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const user_data = {
            username, password
        }

        // axios.post("***",user_data)
        // .then((res) => {
        //     console.log(res)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }



    return (
        <div className='login_page'>
            <div className="login_page-box">
                <h4>Choose your type</h4>
                <div className="login-page_box_text_container">
                    <h6>Hello Doctor !</h6>
                    <h6>  Please fill out the form below to get started</h6>
                </div>
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
                </form>
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
        </div>
    )
}

export default Login
