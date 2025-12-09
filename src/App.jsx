import { useState, useEffect } from 'react'
import './App.css'
import Header from './comps/Header'
import Section from './comps/Section'
import Main from './comps/Main'


function App() {

  const [list, setList] = useState([])
  const [filter, setFilter] = useState("all")
  const [dark, setDark] = useState(false)

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setList(data))
  }, [])


  function removeCard(id) {
    setList(list.filter(item => item.id != id))
  }

  function toggleActive(id) {
    setList(list.map(item => item.id == id ? { ...item, isActive: !item.isActive } : item))
  }

  const filteredList = list.filter(item => {
    if (filter == "all") return true
    if (filter == "active") return item.isActive
    if (filter == "inactive") return !item.isActive
    return true
  })

  return (
    <div className={`app ${dark ? "dark" : ""}`}> 
      <div className="app-wrap">
        <Header dark = {dark} setDark = {setDark} />
        <Section setFilter={setFilter} dark = {dark} />
        <Main dark = {dark} list={filteredList} removeCard={removeCard} toggleActive={toggleActive} />
      </div>
    </div>
  )
}

export default App
