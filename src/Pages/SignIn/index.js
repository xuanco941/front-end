import style from './SignIn.module.css'
import clsx from 'clsx'
import { useState } from 'react'

function SignIn() {

    const [changeFormSignIn, setChangeFormSignIn] = useState(false)
    const [changeFormSignUp, setChangeFormSignUp] = useState(true)

    function SwapForm() {
        setChangeFormSignIn(!changeFormSignIn)
        setChangeFormSignUp(!changeFormSignUp)
    }

    console.log('renderrr');
    return (
        <>
            <div className={style.container}>
                <div className={clsx(style.form, style.formSignIn, { [style.hide]: changeFormSignIn })}>
                    <form className={style.form_log} method='POST'>
                        <input className={style.input} type='text' name='username' placeholder='Tài khoản' />
                        <input className={style.input} type='text' name='password' placeholder='Mật khẩu' />
                        <button className={style.button} type='submit'>Đăng nhập</button>
                    </form>

                    <button className={style.swap} onClick={SwapForm}>Đăng ký tài khoản</button>

                </div>

                <div className={clsx(style.form, style.formSignUp, { [style.hide]: changeFormSignUp })}>

                    <form className={style.form_log} method='POST'>
                        <input className={style.input} type='text' name='username' placeholder='Tài khoản' />
                        <input className={style.input} type='text' name='password1' placeholder='Mật khẩu' />
                        <input className={style.input} type='text' name='password2' placeholder='Nhập lại mật khẩu' />

                        <button className={style.button} type='submit'>Đăng ký</button>
                    </form>

                    <button className={style.swap} onClick={SwapForm}>Đã có tài khoản?</button>

                </div>


            </div>
        </>
    )
}

export default SignIn