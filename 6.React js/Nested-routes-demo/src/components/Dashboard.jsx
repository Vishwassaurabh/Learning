import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Profile from './Profile'
import Settings from './Settings'

const Dashboard = () => {
  return (
    <div>
        <h2>Welcome Youe Dashboard</h2>
        <nav>
            <Link to="profile">Profile</Link>
            <Link to="settings">Settings</Link>
        </nav>
        {/* Nested componenrts wil render her */}
        <Outlet/>
    </div>
  )
}

export default Dashboard