import { useState } from 'react'
import "./App.css"
import UserList from './components/UserList'

function App() {
  return (
    <>
    <h3 className='text-3xl font-bold underline'>Employee List</h3>
    <section className='flex max-w-m mx-auto'>
      <UserList />
    </section>
    </>
  )
}

export default App