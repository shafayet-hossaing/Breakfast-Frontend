import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading, setIsLoading} = useAuth()
    if(isLoading){
        return <Col className="d-flex justify-content-center align-items-center my-3" ><Spinner animation="border" variant="primary" /></Col>
    }
    return (
        <Route
            {...rest}
            render= {({location}) => user?.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: {from: location}
                }}
            >
            </Redirect>     
            }
        >   
        </Route>
    );
};

export default PrivateRoute;