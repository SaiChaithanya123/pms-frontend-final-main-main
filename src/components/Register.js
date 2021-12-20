
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
                                                pattern=''
                                                className="form-control"
                                                name="userName"
                                                id="userName"
                                                className="form-control mb-3"
                                                placeholder="Enter username"
                                                value={appUser.userName}
                                                onChange={handleAppUser}
                                                required 
                                                autoFocus
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






















        // <div className="container">
        //     <div className="col-4 mt-3" >
        //         <h1 className="display-4 text-primary">Register</h1>
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
        //                     onChange={handleAppUser} />
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
        //                     value="Register"
        //                     onClick={submitAppUser}
        //                 />
        //             </div>
        //         </form>
        //         <p className="text-danger">{credentials}</p>
        //         <Link to="/login" className="btn btn-primary col-12">Already registered? Login</Link>
        //     </div>
        //     <div>
        //         {/* https://material.io/components/dialogs/web#alert-dialog */}
        //     </div>
        // </div >







// import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from "axios";
// import AppUser from './models/AppUser';
// // import $ from 'jquery';

// const Register = (props) => {

//     const history = useHistory();

//     const [appUser, setAppUser] = useState(new AppUser());
//     const [credentials, setCredentials] = useState('');

//     const handleAppUser = (event) => {
//         console.log(event.target.name);
//         console.log(event.target.value);
//         setAppUser({
//             ...appUser,
//             [event.target.name]: event.target.value
//         });
//     };

//     const submitAppUser = (event) => {

//         axios.post(`http://localhost:8082/register`, appUser)
//             .then((response) => {
//                 console.log(response.data);
//                 localStorage.setItem('appUser', appUser);
//                 alert('You are registered successfully. Please login now.');
//                 history.push('/login'); // check this method to navigate
//             }).catch((error) => {
//                 console.log(error.response);
//                 setCredentials("Enter proper credentials.");
//             });
//         event.preventDefault();
//     }
//     return (
//         <div className="container">
//             <div className="col-4 mt-3" >
//                 <h1 className="display-4 text-primary">Register</h1>
//                 <form className="form form-group form-dark " onSubmit={submitAppUser}>
//                     <div>
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="userName"
//                             id="userName"
//                             className="form-control mb-3"
//                             placeholder="Enter username"
//                             value={appUser.userName}
//                             onChange={handleAppUser}
//                             required
//                         />
//                         <input
//                             type="password"
//                             className="form-control"
//                             name="password"
//                             id="password"
//                             className="form-control mb-3"
//                             placeholder="Enter password"
//                             value={appUser.password}
//                             onChange={handleAppUser} />
//                         <div class="form-group">
//                             <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
//                                 <option value="Role">Select a role</option>
//                                 <option value="ADMIN">ADMIN</option>
//                                 <option value="EMPLOYEE">EMPLOYEE</option>
//                                 <option value="MANAGER">MANAGER</option>
//                             </select>
//                         </div>
//                         <input
//                             type="submit"
//                             id="submit"
//                             name="submit"
//                             className="form-control btn btn-primary mb-3"
//                             value="Register"
//                             onClick={submitAppUser}
//                         />
//                     </div>
//                 </form>
//                 <p className="text-danger">{credentials}</p>
//                 <Link to="/login" className="btn btn-primary col-12">Already registered? Login</Link>
//             </div>
//             <div>
//                 {/* https://material.io/components/dialogs/web#alert-dialog */}
//             </div>
//         </div >

//     )
// }
// export default Register;



// import { useState, useEffect } from 'react';
// import axios from "axios";
// import AppUser from './models/AppUser';

// const Register = (props) => {

//     const [appUser, setAppUser] = useState(new AppUser());
//     // userName, password, role

//     const handleChange = (event) => {
//         console.log(event.target.value);
//         setAppUser({
//             ...appUser,
//             [event.target.name]: event.target.value
//         });
//     }

//     const onSubmit = () => {
//         console.log('onSubmit');
//         axios.post('http://localhost:8082/register', appUser)
//             .then((response) => {
//                 alert(response.data.userName + ' registered successfully.');
//             })
//             .catch(() => {
//                 alert('Something is wrong!')
//             }
//             );
//     }

//     // const [deleteThisVar, setDeleteThisVar] = useState('');

//     // const deleteThisMethod = (e) => {
//     //     console.log(e.target);
//     //     setDeleteThisVar(e.target.value);
//     // }

//     return (
//         <div className="container">
//             {/* <p>Please enter some text...</p>
//             <input type="text" name="deleteThisVar" value={deleteThisVar} onChange={deleteThisMethod} />
//             <p>{deleteThisVar}</p> */}
//             <p>Register as a new User</p>
//             <div>
//                 <form>
//                     <input type="text" name="userName" value={appUser.userName} placeholder="Please enter user name" onChange={handleChange} />
//                     <br />
//                     <input type="password" name="password" value={appUser.password} onChange={handleChange} />
//                     <br />
//                     <input type="text" name="role" value={appUser.role} onChange={handleChange} />
//                     <br />
//                     <input type="submit" value="Register" onClick={onSubmit} />
//                 </form>
//             </div>

//         </div >

//     )
// }
// export default Register;
