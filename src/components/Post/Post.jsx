import { Avatar } from '../Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
export function Post({author, content}) {
  return (
    <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src="https://github.com/Mauricio-nexus3.png" />
        <div className={styles.authorInfo}>
          <strong>Mauricio costa</strong>
          <p>web developer</p>
        </div>
      </div>

        <time title='11 de maio às 10:10h' dateTime='2022-07-15 10:10:33'>
          Publicado há 1h
        </time>
    </header>  

    <div className={styles.content}>
      <p>Fala galera</p>
      <p>Acabei de subir mais um projeto no meu portfólio, 
          é um projeto que fiz no NLW return, evento da rocketseat.
          O nome do projeto é Hardstore.
      </p>
  
      <p><a href="#"> John.vendas/hardstore</a></p>
      <p>
          <a href="#"> #novoProjeto </a>
          <a href="#"> #nlw </a>
          <a href="#"> #rocketseat </a>
      </p>
    </div>


        <form className={styles.commentsForm} comments>
              <strong>Deixe seu feedback</strong>
              <textarea placeholder='Deixe um comentário' />
              
          <footer>
                <button type='submit' className={styles.submitButton} >
                  Publicar
                </button>
          </footer>

        </form>
  
    <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
    </div>


    </article>
  )
}