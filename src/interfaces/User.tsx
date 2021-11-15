export interface IUser {
    uid: string | undefined;
    authenticated: boolean;
    favorites: Array<number>;
    numberpage: number;
}

export interface ISignInUser {
    email: string;
    password: string;
}
