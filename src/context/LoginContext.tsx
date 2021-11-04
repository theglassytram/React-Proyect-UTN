import React, { useContext } from 'react';
import { UserContext } from './UserContext';

 function LoginContext (){
    const {user, setUser} = useContext(UserContext);

    console.log(user, setUser);

    return(

        <>
            <h3>Login</h3>
            {JSON.stringify(user)}
            <button onClick={() => setUser({id: 1, nombre: "pepe", pass: "pepe"})}>Login</button>
        </>

    )

}

export default LoginContext;