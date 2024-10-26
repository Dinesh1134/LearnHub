import React from 'react'
import './styles/Header.css'
const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='content'>
                <div className='learnhub'><a href="/" aria-label='LearnHub'><h1>LearnHub</h1></a></div>
                <div className='admin'><a href="/admin" aria-label='Admin'>Admin</a></div>
            </div>
        </div>
    </header>
  )
}

export default Header
