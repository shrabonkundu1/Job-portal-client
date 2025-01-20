import React, { useContext } from 'react';
import AUthContext from '../Context/AuthContext';
import { use } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AUthContext);


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
            <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default PrivateRoute;