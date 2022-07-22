import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";

export function Comment ({content, onDeleteComment}) {

  function handleDeleteComment() { 


      onDeleteComment(content)
  }
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Mauricio-nexus3.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

        <header>
            <div className={styles.authorAndTime}>
              <strong>Mauricio Costa</strong>
              <time title='11 de maio às 10:10h' dateTime='2022-07-15 10:10:33'>Cerca de 1h atrás </time>     
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
        </header>
        
        <p>{content}</p>
      </div>

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>28</span>
        </button>
      </footer>

      </div>
    </div>
  )
}