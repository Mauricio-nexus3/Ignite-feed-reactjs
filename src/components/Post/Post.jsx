import styles from './Post.module.css'
export function Post({author, content}) {
  return (
    <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://github.com/Mauricio-nexus3.png" />
        <div className={styles.authorInfo}>
          <strong>John monteiro</strong>
          <p>Vendedor</p>
        </div>
      </div>

        <time title='11 de maio às 10:10h' dateTime='2022-07-15 10:10:33'>
          Publicado há 1h
        </time>
    </header>  

    <div className={styles.content}>
      <p>Fala galera</p>
      <p>Acabei de subir mais um projeto no meu portifólio, 
          é um projeto que fiz no NLW return, evento da rocketseat.
          O nome do projeto é hardstore
      </p>
  
      <p><a href="#"> John.vendas/hardstore</a></p>
      <p>
          <a href="#"> #novoProjeto </a>
          <a href="#"> #nlw </a>
          <a href="#"> #rocketseat </a>
      </p>
    </div>


    <footer>
      <h2>Deixe seu feedback</h2>
      <input type="text" />
      <button type="submit">Publicar</button>
    </footer>

    </article>
  )
}