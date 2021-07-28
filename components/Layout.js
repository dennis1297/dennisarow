import React from 'react'
import NavBar from './NavBar'
import Notify from './Notify'
import Modal from './Modal'
import Header from './header'


function Layout({children}) {
    return (
        <div className="container">
          
            <NavBar />
            <Notify />
            {/* <Modal /> */}
            {children}
            <Notify />
        </div>
    )
}

export default Layout
