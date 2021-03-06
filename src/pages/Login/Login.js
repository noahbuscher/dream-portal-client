import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from 'connected-react-router';

import { loginUser } from "stores/User/UserEffects";

import Container from "components/layout/Container/Container";
import Card, { CardBody } from "components/layout/Card/Card";
import Row, { Column, ColumnSizes } from "components/layout/Row/Row";
import Alert, { Types as AlertTypes } from "components/general/Alert/Alert";

import { setToken } from "utils/profile";

const SignupPage = () => {
    // Form values
    const [ emailValue, setEmailValue ] = useState("");
    const [ passwordValue, setPasswordValue ] = useState("");

    const formError = useSelector(state => state.user.login.error);
    const userToken = useSelector(state => state.user.token);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const dispatch = useDispatch();

    // Watch for a proper signup for redirect
    useEffect(() => {
        if (isAuthenticated && userToken) {
            setToken(userToken);
            dispatch(push("/"));
        }
    });

    const onLoginUser = (e) => {
        e.preventDefault();

        // Attempt to log the user in
        dispatch(loginUser({
            email: emailValue,
            password: passwordValue,
        }));
    };

    return (
        <Container>
            <Row>
                <Column size={ColumnSizes.SIX}>
                    <div className="d-flex align-items-center h-100 mr-5">
                        <div>
                            <h1 className="mb-4">
                                <i className="fas fa-user-plus"></i> Login
                            </h1>
                            <p className="lead">
                                Log in to your Dream Portal account.
                            </p>
                        </div>
                    </div>
                </Column>
                <Column size={ColumnSizes.SIX}>
                    <Card>
                        <CardBody>
                            { formError && <Alert type={AlertTypes.ERROR} text={formError.toString()}/> }
                            <form onSubmit={onLoginUser}>
                                <div className="form-group">
                                    <label className="form-control-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={emailValue}
                                        onChange={(e) => setEmailValue(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={passwordValue}
                                        onChange={(e) => setPasswordValue(e.target.value)}
                                    />
                                </div>
                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="btn btn-info btn-icon"
                                    >
                                        <span className="btn-inner--text">Login</span>
                                        <span className="btn-inner--icon">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </Column>
            </Row>
        </Container>
    )
};

export default SignupPage;