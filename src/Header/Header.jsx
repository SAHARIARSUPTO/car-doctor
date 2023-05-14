import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.svg";
import "./Header.css"
import { AuthContext } from '../Providers/Authprovider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <nav>
            <div className="navbar">
                <div className="flex-1">
                    <Link to=""><img src={logo} alt="" /></Link>
                </div>

                <div className='links mx-5'>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/login">Log In</Link>
                </div>
                {
                    user &&
                    <div className="avatar flex gap-4 mx-5">
                        <div className="w-12 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                        
                    </div>
                }

                <div className="dropdown dropdown-end">
                    <div>

                        <button className="btn btn-outline btn-warning">Appointment</button>

                    </div>

                </div>
            </div>


        </nav>
    );
};

export default Header;