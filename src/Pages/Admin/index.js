import style from './SignIn.module.css'
import clsx from 'clsx'

function Admin() {

    

    console.log('renderrr');
    return (
        <>
            <div className={style.container}>
                <div className={clsx(style.form, style.formSignIn)}>
                    <form className={style.form_log} method='POST'>
                        <input className={style.input} type='text' name='username' autoComplete='off' placeholder='Tài khoản quản trị viên' />
                        <input className={style.input} type='text' name='password' autoComplete='off' placeholder='Mật khẩu' />
                        <button className={style.button} type='submit'>Đăng nhập</button>
                    </form>

                </div>

               

            </div>
        </>
    )
}

export default Admin