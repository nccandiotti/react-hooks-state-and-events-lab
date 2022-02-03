import React, { useState } from "react"
import ShoppingList from "./ShoppingList"
import itemData from "../data/items"

function App() {
  const [isDark, setIsDark] = useState(false)

  const appClass = isDark ? "App dark" : "App light"

  const handleClickDark = (e) => {
    setIsDark((isDark) => !isDark)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClickDark}>
          {isDark ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  )
}

export default App
