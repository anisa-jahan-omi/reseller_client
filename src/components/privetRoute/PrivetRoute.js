import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../context/UserContext';
import Spinner from '../../utilities/Spinner';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    if (loading) {
        return <Spinner />
    }
    if (user) {
        return children;
    }
    return <Navigate to="../login" />;
};

export default PrivetRoute;