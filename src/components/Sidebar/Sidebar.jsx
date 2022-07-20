import { Pencil } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (

    <aside className={styles.sidebar}>
    <img className={styles.cover} src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=255&q=50"/>
   
    <div className={styles.profile}>

      <Avatar src="https://github.com/Mauricio-nexus3.png" />

      <strong>Mauricio Costa</strong>
      <span>Web developer</span>
    </div>

    <footer>
      <a href="#" >
        <Pencil size={20} />
        Editar seu perfil
      </a>
    </footer>

  </aside>
    )
}