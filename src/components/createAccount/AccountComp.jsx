import style from '../login/style.module.css'
import thisStyle from './style.module.css'
// import { LoginDiv } from '../login/LoginComp'
import { LogoDiv, CustomInput } from "../login/LoginComp";
import { MyButton } from "../button";


export const CreateAccount = () => {
    return (
        <div className={style.loginContainer}>
            <header className={style.header}>
                <CustomInput
                    // onChange={handleSearch} 
                    type="search" placeholder="Search for anything here.." className={style.search} />
            </header>
            <main className={style.main}>
                <CustomInput 
                // onChange={handleEmail} 
                type="text" placeholder="Business Name" label={"Business Name"} />
                <CustomInput 
                // onChange={handleEmail} 
                type="email" placeholder="www.derilpharmacy.com" label={"Email"} />
                <CustomInput 
                // onChange={handleEmail} 
                type="password" placeholder="Password" label={"Password"} />
                <CustomInput 
                // onChange={handleEmail} 
                type="password" placeholder="Confirm Password" label={"Confirm Password"} />
                <MyButton type='primary' className={style.loginBtn} title='Sign up'
                    // onClick={handleLogin}
                    // disabled={isSubmitting} 
                    />
            </main>

        </div>
    )
}
