import React, {useState, useEffect} from 'react'
import './user.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom';

export default function User() {

    const location = useLocation();

    const[avatar, setAvatar] = useState('');
    const[fullName, setFullName] = useState('');
    const[userName, setUserName] = useState('');
    const[title, setTitle] = useState('');
    const[birthDate, setBirthDate] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[email, setEmail] = useState('');
    const[address, setAddress] = useState('');

    useEffect(()=>{
        setAvatar(location.state.params.avatar);
        setFullName(location.state.params.fullName);
        setUserName(location.state.params.userName);
        setTitle(location.state.params.title);
        setBirthDate(location.state.params.birthDate);
        setPhoneNumber(location.state.params.phoneNumber);
        setEmail(location.state.params.email);
        setAddress(location.state.params.address);
        location.state=undefined;
    }, [location])

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to={"/newUser"}>
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={avatar} alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{fullName}</span>
                            <span className="userShowUserTitle">{title}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">{fullName}</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">{birthDate}</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">{phoneNumber}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">{email}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">{address}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" className="userUpdateInput" placeholder={userName}/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" className="userUpdateInput" placeholder={fullName}/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" className="userUpdateInput" placeholder={email}/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" className="userUpdateInput" placeholder={phoneNumber}/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" className="userUpdateInput" placeholder={address}/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src={avatar} alt="" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{ display:"none" }}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
