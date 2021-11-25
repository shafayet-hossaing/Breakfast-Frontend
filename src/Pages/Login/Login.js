import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {googleSignIn, setIsLoading, setUser, user, sign} = useAuth();
    const history = useHistory()
    const location = useLocation()
    const redirect_uri = location.state?.from || "/home"

    const googleLog = () => {
        googleSignIn()
        .then(result => {
            setUser(result.user)
            history.push(redirect_uri)
            console.log(result.user);
        }).catch(error => {
            console.log(error.message);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                        <Button className="text-center" onClick={googleLog}>Google Login</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;