import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media-exp3.licdn.com/dms/image/C4D03AQGTybavRUmN9A/profile-displayphoto-shrink_100_100/0/1569506197811?e=1628726400&v=beta&t=YnLZ1Tit2CKWTfISdqrMVleJi5W4JSmLlJT1gQuy0KE" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">María Pilar Asensio Ruiz</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">122.00 €</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media-exp3.licdn.com/dms/image/C4D03AQGTybavRUmN9A/profile-displayphoto-shrink_100_100/0/1569506197811?e=1628726400&v=beta&t=YnLZ1Tit2CKWTfISdqrMVleJi5W4JSmLlJT1gQuy0KE" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">María Pilar Asensio Ruiz</span>
                    </td>
                    <td className="widgetLgDate">23 Feb 2021</td>
                    <td className="widgetLgAmount">14.53 €</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media-exp3.licdn.com/dms/image/C4D03AQGTybavRUmN9A/profile-displayphoto-shrink_100_100/0/1569506197811?e=1628726400&v=beta&t=YnLZ1Tit2CKWTfISdqrMVleJi5W4JSmLlJT1gQuy0KE" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">María Pilar Asensio Ruiz</span>
                    </td>
                    <td className="widgetLgDate">14 Dec 2020</td>
                    <td className="widgetLgAmount">96.83 €</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media-exp3.licdn.com/dms/image/C4D03AQGTybavRUmN9A/profile-displayphoto-shrink_100_100/0/1569506197811?e=1628726400&v=beta&t=YnLZ1Tit2CKWTfISdqrMVleJi5W4JSmLlJT1gQuy0KE" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">María Pilar Asensio Ruiz</span>
                    </td>
                    <td className="widgetLgDate">13 Nov 2020</td>
                    <td className="widgetLgAmount">12.55 €</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}