import React from 'react'
import { Outlet } from 'react-router-dom'

const Postlayout = () => {
  return (
    <div>
        <h1>post Details</h1>
        
        {/* nested route renders here */}
         <Outlet />
    </div>
  )
}

export default Postlayout