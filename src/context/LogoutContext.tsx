import React, { useContext } from 'react';
import { UserContext } from './UserContext';

 function LogoutContext (){

    const {user, setUser} = useContext(UserContext);

    return(

        <>
            <h3>Logout</h3>
            {JSON.stringify(user)}
            <button onClick={() => setUser({})}>Logout</button>
        </>

    )

}

export default LogoutContext;