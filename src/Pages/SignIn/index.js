import style from './SignIn.module.css'
import clsx from 'clsx'
import { useState } from 'react'

function SignIn() {

    const [changeFormSignIn, setChangeFormSignIn] = useState(false)
    const [changeFormSignUp, setChangeFormSignUp] = useState(true)
    const [username_signin, setUsername_Signin] = useState('');
    const [password_signin, setPassword_Signin] = useState('');
    const [username_signup, setUsername_Signup] = useState('');
    const [password_signup, setPassword_Signup] = useState('');
    const [repassword_signup, setRePassword_Signup] = useState('');


    const handleButtonSignIn = () => {
        fetch(process.env.REACT_APP_API_ENDPOINT + '/user/signin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username_signin,
                password: password_signin
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'error') {
                    alert(data.message);
                }
                else{
                    localStorage.setItem('accessToken',data.data.accessToken)
                    localStorage.setItem('refreshToken',data.data.refreshToken)
                }
            })
    }


    const handleButtonSignUp = () => {

        if (repassword_signup !== password_signup) {
            alert('Mat khau khong trung nhau');
        }
        else {
            fetch(process.env.REACT_APP_API_ENDPOINT + '/user/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username_signup,
                    password: password_signup
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.status === 'error') {
                        alert(data.message);
                    }
                    else {
                        alert(data.status);
                    }
                })
        }
    }


    function SwapForm() {
        setChangeFormSignIn(!changeFormSignIn)
        setChangeFormSignUp(!changeFormSignUp)
    }

    return (
        <>
            <div className={style.container}>
                <div className={clsx(style.form, style.formSignIn, { [style.hide]: changeFormSignIn })}>
                    <form className={style.form_log}>
                        <input value={username_signin} onChange={(e) => { setUsername_Signin(e.target.value) }} className={style.input} type='text' name='username' autoComplete='off' placeholder='Tài khoản' />
                        <input value={password_signin} onChange={(e) => { setPassword_Signin(e.target.value) }} className={style.input} type='text' name='password' autoComplete='off' placeholder='Mật khẩu' />
                        <button onClick={handleButtonSignIn} className={style.button} type='button'>Đăng nhập</button>
                    </form>

                    <button className={style.swap} onClick={SwapForm}>Đăng ký tài khoản</button>

                </div>

                <div className={clsx(style.form, style.formSignUp, { [style.hide]: changeFormSignUp })}>

                    <form className={style.form_log}>
                        <input value={username_signup} onChange={(e) => { setUsername_Signup(e.target.value) }} className={style.input} type='text' name='username' autoComplete='off' placeholder='Tài khoản' />
                        <input value={password_signup} onChange={(e) => { setPassword_Signup(e.target.value) }} className={style.input} type='text' name='password1' autoComplete='off' placeholder='Mật khẩu' />
                        <input value={repassword_signup} onChange={(e) => { setRePassword_Signup(e.target.value) }} className={style.input} type='text' name='password2' autoComplete='off' placeholder='Nhập lại mật khẩu' />

                        <button onClick={handleButtonSignUp} className={style.button} type='button'>Đăng ký</button>
                    </form>

                    <button className={style.swap} onClick={SwapForm}>Đã có tài khoản?</button>

                </div>


            </div>
        </>
    )
}

export default SignIn