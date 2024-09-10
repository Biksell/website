import {useState, useEffect} from 'react'

function App() {
  const [cursor, setCursor] = useState('_');

  useEffect (() => {
    setTimeout(() => {
      const interval = setCursor(cursor === " " ? "_" : " ")
    }, 700)
  })

  return (
    <div>
      <div>
        <span>biksel.dev</span>
        <span className="cursor">{cursor}</span>
      </div>
      <div className={`d-grid gap-2 d-sm-flex justify-content-sm-center`}>
        <a className={`btn btn-outline-light px-4`} href="https://github.com/biksell">
          <i className={`bi bi-github`}> </i>
          GitHub
        </a>
      </div>
    </div>
  )
}

export default App
