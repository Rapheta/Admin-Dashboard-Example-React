import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/">
                        <span className="logo">admin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://media-exp3.licdn.com/dms/image/C4D03AQEFR8zOGiWz5A/profile-displayphoto-shrink_200_200/0/1605128380407?e=1628726400&v=beta&t=s79vfhLNALLT7gJdB3Rw7pDtd4imhmesnQUKT0JNylI" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}