import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import style from './App.module.css'
import './global.css'

function App() {
 return (
  <div>
    <Header/>
      <div className={style.wrapper}>
        <Sidebar />
        
        <main>
        <Post
          author="Diego Fernandes"
          content='Lorem ipsum....'
        />
        
        </main>
      </div>
  </div>
  )
}

export default App
