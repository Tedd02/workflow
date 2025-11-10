import { useState } from 'react'
//import '../App.css'
import Banner from './Banner'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import Cart from './Cart'

function App() {
  
  return (
    <div class="m-0">
      <Banner/>
      <div class='flex flex-row'>
        <Cart/>
        <ShoppingList/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
