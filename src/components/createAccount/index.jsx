import style from '../login/style.module.css'
import thisStyle from './style.module.css'
import { LogoDiv} from "../login/LoginComp";
import { CreateAccount } from './AccountComp.jsx';

export const CreateAccountPG = () => {
    return (
        <div>
            <section className={style.section}>
                <div className={style.logoDiv}>
                    <LogoDiv />
                </div>
                <div className={style.loginDiv}>
                    <CreateAccount />
                </div>
            </section>
        </div>
    )
}