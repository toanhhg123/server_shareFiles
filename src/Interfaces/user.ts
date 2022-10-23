export interface IUserRegister {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    schoolId: string;
    dateOfBirth: Date;
}


export interface IUserResponse {
    _id: string,
    email: string,
    firstName: string;
    lastName: string;
    schoolId: string;
    dateOfBirth: Date;
}