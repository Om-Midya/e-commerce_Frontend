import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header.tsx";
import {Categories} from "./components/Categories.tsx";
import {Carousel} from "./components/Carousel.tsx";
import {Body} from "./components/Body.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Categories/>
        <Carousel/>
        <Body/>
    </>
  )
}

export default App
