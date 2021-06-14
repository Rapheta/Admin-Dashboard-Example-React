import React from 'react'
import './widgetSm.css'
import {Visibility} from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://media-exp3.licdn.com/dms/image/C4E03AQGrK3j2vFLlWg/profile-displayphoto-shrink_100_100/0/1517695961568?e=1628726400&v=beta&t=hupEnjc9Xcvw0gxvjLxw5jmsbtUURKfiXxCXnmMUDKU" alt className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Sylita Thomas</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://media-exp3.licdn.com/dms/image/C4D03AQG6ZdcDfhFjgA/profile-displayphoto-shrink_100_100/0/1569947980752?e=1628726400&v=beta&t=ddj8UxQzHcOxBFmJoxeFWXO4615kRj5tDMNs-Nr_GL0" alt className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Xavier Coll</span>
                        <span className="widgetSmUserTitle">CEO FDSA</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://media-exp3.licdn.com/dms/image/C5603AQF_fUx4DXmPLw/profile-displayphoto-shrink_100_100/0/1517361066173?e=1628726400&v=beta&t=GMv5YSdClDR0Kl9gCQprJaoJhVpbPcHXDK5sxrrD7mg" alt className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adrià Freixas</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://media-exp3.licdn.com/dms/image/C4E03AQFiYxPZgSLiQw/profile-displayphoto-shrink_100_100/0/1609109850503?e=1628726400&v=beta&t=M2XabnL5HpGmcVKXcDsg8Bj0EGO5YFAApj1RM9_w7aA" alt className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mari Carmen González</span>
                        <span className="widgetSmUserTitle">Front-End Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://media-exp3.licdn.com/dms/image/C5603AQHxYwvybLdtQg/profile-displayphoto-shrink_100_100/0/1609754698318?e=1628726400&v=beta&t=Vm1Hl89Q9sv_CVFGNIoLbtLBYookr5fpF26tQaOFoJQ" alt className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Fernando Fluixà</span>
                        <span className="widgetSmUserTitle">Product Owner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://media-exp3.licdn.com/dms/image/C4D03AQFyhDQZgrSK1Q/profile-displayphoto-shrink_100_100/0/1557344855598?e=1628726400&v=beta&t=tNtHxwdjPRu6upgIo7cUudbQBvgklbMZSTz5GCxRhhU" alt className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Marta Gómez</span>
                        <span className="widgetSmUserTitle">Front-End Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
