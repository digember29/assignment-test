import React from 'react'
import './assets/scss/App.scss'
import Header from './components/Header'
import SearchAndFilter from './components/SearchAndFilter'
import Main from './components/Main'

export default function App() {
  return (
    <div>
      <Header />
      <SearchAndFilter />
      <Main />
    </div>
  )
}
