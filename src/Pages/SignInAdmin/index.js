import style from './SignIn.module.css'
import clsx from 'clsx'

function SignInAdmin() {

    

    console.log('renderrr');
    return (
        <>
            <div className={style.container}>
                <div className={clsx(style.form, style.formSignIn)}>
                    <form className={style.form_log} method='POST'>
                        <input className={style.input} type='text' name='username' placeholder='Tài khoản' />
                        <input className={style.input} type='text' name='password' placeholder='Mật khẩu' />
                        <button className={style.button} type='submit'>Đăng nhập</button>
                    </form>

                </div>

               

            </div>
        </>
    )
}

export default SignInAdmin