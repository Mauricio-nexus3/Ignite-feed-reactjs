import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import style from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://github.com/Mauricio-nexus3.png",
      name: "Mauricio Costa",
      role: 'Developer'
    },
    content:[
      { type: 'paragraph', content:  'Fala galera 👋' },
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portfólio, é um projeto que fiz no NLW return, evento da rocketseat. O nome do projeto é Hardstore 🚀' },
      { type: 'link', content:  'John.vendas/hardstore' },
    ],
    publishedAt: new Date('2022-07-20 05:50:33')
  },
  
  {
    id: 2,
    author:{
      avatarUrl: "https://github.com/thais.png",
      name: "Thais Costa",
      role: 'Ux Designer'
    },

    content:[
      { type: 'paragraph', content:  'Oie amores!!' },
      { type: 'paragraph', content:  'Mais um projeto no meu portfólio, é um projeto que fiz no NLW return, evento da rocketseat. O nome do projeto é Hardstore 🚀' },
      { type: 'link', content:  'John.vendas/hardstore' },
    ],
    publishedAt: new Date('2022-07-19 17:40:33')
  }
  
]

function App() {
 return (
  <div>
    <Header/>
      <div className={style.wrapper}>
        <Sidebar />
        
        <main>
        {posts.map( post => {
         return (
           <Post
           key={post.id}
           author={post.author}
           content={post.content}
           publishedAt={post.publishedAt}
           />
         ) 
        })}
        </main>
      </div>
  </div>
  )
}

export default App
