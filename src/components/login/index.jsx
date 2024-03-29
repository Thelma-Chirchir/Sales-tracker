import {LogoDiv, LoginDiv} from './LoginComp.jsx';
import style from './style.module.css'

export const Login =()=>{
    return(
    <section className={style.section}>
        <div className={style.logoDiv}>
            <LogoDiv/>
        </div>
        <div className={style.loginDiv}>
            <LoginDiv/>
        </div>
    </section>
    )}