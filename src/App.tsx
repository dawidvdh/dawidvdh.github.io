import React from 'react'
import { Root, Routes } from 'react-static'
import { Link, Router } from '@reach/router'
import FancyDiv from 'components/FancyDiv'
import './app.css'

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="content">
        <FancyDiv>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </FancyDiv>
      </div>
    </Root>
  )
}

export default App
