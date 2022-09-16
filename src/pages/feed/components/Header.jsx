import Styles from "../Styles.module.css";
import Logo from "../../../assets/logo.png"
const Header = () => {
    return (
    <>
        <div className={`${Styles.header} ${Styles.wrapper}`}> 
            <div>
                <img className={`${Styles.logo}`} src={Logo} alt="Logo" />
            </div>
            <div className={`${Styles.authLinks}`}>
                <a href="/">ثبت نام</a>

                <a className={`${Styles.login}`} href="/">ورود</a>
            </div>
        </div>
    </> );
}
 
export default Header;