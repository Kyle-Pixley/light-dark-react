import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './App.css'

function App() {
  
  const [ light, setLight ] = useState(true)

  const lightDark = {
    backgroundColor: light ? "white" : "black",
    color: light ? "black" : "white"
  }

  return (
    <>
    <div style={lightDark}>
      <button onClick={e => setLight(!light)}>Light or Dark</button>
      <Header />
      <Content />
      <Footer />
    </div>
    </>
  )
}

export default App


// import { useState } from 'react'
// import Header from "./components/Header"
// import Footer from "./components/Footer"
// import Content from "./components/Content"
// import './App.css'
// // Global scope

// function App() {

//   const [ styleMode, setStyleMode ] = useState(false)
//   // false for light; true for dark

//   function toggleSwitch() {
//     return styleMode ? "light mode" : "dark mode"
//   }

//   return (
//   //  <div className={styleMode ? "dark-mode" : "light-mode"}>
//    <div>
//     <button onClick={ e => setStyleMode(!styleMode) }>{toggleSwitch()}</button>
//     <Header styleMode={styleMode} />
//     <Content />
//     <Footer />
//    </div>
//   )
// }

// export default App