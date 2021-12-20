
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import AppUser from './models/AppUser';

const Register = (props) => {

    const history = useHistory();

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

        axios.post(`http://localhost:8082/register`, appUser)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('appUser', appUser);
                alert('You are registered successfully. Please login now.');
                history.push('/login'); // check this method to navigate 
            }).catch((error) => {
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
                            <div class='col-md-5 register-left'>
                                <img class='image' src="/assets/Re.png" width="500" height="500" />
                            </div>
                            <div class='col-md-7 register-right'>
                                <h2>
                                    Register Here
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
                                                onChange={handleAppUser} />

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
                                                value="Register"
                                                onClick={submitAppUser}
                                            />
                                        </div>
                                        <p className="text-danger">{credentials}</p>
                                        <Link to="/login" className="btn btn-primarys">Already registered? Login</Link>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default Register;
