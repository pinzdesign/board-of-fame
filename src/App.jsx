import { useState } from 'react'
import "./App.css"
import UserList from './components/UserList'

function App() {
  return (
    <>
    <h3>Employee List</h3>
    <section>
      <UserList />
    </section>
    </>
  )
}

export default App