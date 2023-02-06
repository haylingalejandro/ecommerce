import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'


function App() {   
  return (
    <div className="App">
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting={"Greetings!"}/>
    </ChakraProvider>
    </div>
  )
}

export default App
