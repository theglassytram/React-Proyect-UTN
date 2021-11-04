import {useState} from 'react';
import React from 'react';

interface Usuario {
    readonly id: number;
    nombreUsuario: string;
    pass: string;
}

function Login() {

    return (
        <>
        <h3>Login</h3>
        <label>Nombre Usuario</label>
        <input type="text"></input>
        </>
    )
}

export default Login;