import style from "./Header.module.css";
import IgniteLogo from '../../assets/Ignite-logo.svg'

export function Header() {
  return(

      <header className={style.header}>
        <img src={IgniteLogo} alt='Logotipo do ignite' />
        <strong>Ignite Feed</strong>
      </header>

  );
}