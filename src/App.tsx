import './App.css'
import {Header} from "./components/Header.tsx";
import {Categories} from "./components/Categories.tsx";
import {Carousel} from "./components/Carousel.tsx";
import {Body} from "./components/Body.tsx";

function App() {

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
