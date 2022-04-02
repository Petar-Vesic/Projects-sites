import React, { useState } from 'react'

import Menu from './Menu'
import items from './data'

function App() {
  const [menuItems] = useState(items)

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Project's</h2>
          <div className='underline'></div>
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
