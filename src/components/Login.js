import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import AppUser from './models/AppUser';

const Login = () => {

    // const history = useHistory();

    const [appUser, setAppUser] = useState(new AppUser());
    const [credentials, setCredentials] = useState('');

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        axios.post(`http://localhost:8082/login`, appUser)
            .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('isUserLoggedIn', true);
                sessionStorage.setItem('whoIsLoggedIn', response.data.role);
                alert('Success');
                window.location.assign('/home');
                // history.push('/home');
            }).catch((error) => {
                sessionStorage.setItem('isUserLoggedIn', false);
                sessionStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <div class="regis">
            <div class='container'>
                <div class='row'>
                    <div class='col-md-10 offset=md-1'>
                        <div class='row'>
                            <div class='col-md-7 register-rights'>
                                <h2>
                                    Login
                                </h2>
                                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                                    <div class='register-form'>
                                        <div class='form-group'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="userName"
                                                id="userName"
                                                className="form-control mb-3"
                                                placeholder="Enter username"
                                                value={appUser.userName}
                                                onChange={handleAppUser}

                                                required
                                            />
                                        </div>
                                        <div class='form-group'>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="password"
                                                className="form-control mb-3"
                                                placeholder="Enter password"
                                                value={appUser.password}
                                                onChange={handleAppUser}
                                                required
                                            />

                                        </div>
                                        <div class='form-group'>
                                            <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                                                <option value="Role">Select a role</option>
                                                <option value="ADMIN">ADMIN</option>
                                                <option value="PENSIONER">PENSIONER</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input
                                                type="submit"
                                                id="submit"
                                                name="submit"
                                                className="btn btn-primary"
                                                value="Login"
                                                onClick={submitAppUser}
                                            />
                                        </div>
                                        <p className="text-danger">{credentials}</p>
                                        <Link to="/register" className="btn btn-primarys">Not yet registered? Register</Link>

                                    </div>
                                </form>

                            </div>
                            <div class='col-md-5 register-lefts'>
                                <img class='image' src="/assets/Re.png" width="500" height="500" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >















        // <div className="container">
        //     <div className="col-4 mt-3" >
        //         <h1 className="display-4 text-primary">Login</h1>
        //         <form className="form form-group form-dark " onSubmit={submitAppUser}>
        //             <div>
        //                 <input
        //                     type="text"
        //                     className="form-control"
        //                     name="userName"
        //                     id="userName"
        //                     className="form-control mb-3"
        //                     placeholder="Enter username"
        //                     value={appUser.userName}
        //                     onChange={handleAppUser}
        //                     autoFocus
        //                     required
        //                 />
        //                 <input
        //                     type="password"
        //                     className="form-control"
        //                     name="password"
        //                     id="password"
        //                     className="form-control mb-3"
        //                     placeholder="Enter password"
        //                     value={appUser.password}
        //                     onChange={handleAppUser}
        //                     required
        //                 />
        //                 <div class="form-group">
        //                     <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
        //                         <option value="Role">Select a role</option>
        //                         <option value="ADMIN">ADMIN</option>
        //                         <option value="EMPLOYEE">EMPLOYEE</option>
        //                         <option value="MANAGER">MANAGER</option>
        //                     </select>
        //                 </div>
        //                 <input
        //                     type="submit"
        //                     id="submit"
        //                     name="submit"
        //                     className="form-control btn btn-primary mb-3"
        //                     value="Login"
        //                     onClick={submitAppUser}
        //                 />
        //             </div>
        //         </form>
        //         <p className="text-danger">{credentials}</p>
        //         <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link>
        //     </div>
        // </div >
    )
}
export default Login;