import React, { useContext } from 'react';
import AUthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AUthContext);
    const location = useLocation();
    const from = location.state || '/';
    if (loading) {
        return <div className="min-h-screen flex items-center justify-center ">
          <span className="loading loading-bars loading-md mx-auto"></span>;
        </div>
      }

    //----------user thakle jau naile login route e nia jabe 
    if(user) {
        return children
    }
    return (
        <div>
            <Navigate to={'/login'} state={location?.pathname}></Navigate>
        </div>
    );
};

export default PrivateRoute;