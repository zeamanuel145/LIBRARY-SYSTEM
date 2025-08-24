export type User = {
  _id(arg0: string, _id: any): unknown;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  type: 'ADMIN' | 'EMPLOYEE' | 'PATRON';
};


export interface LoginUserPayload{
    email: string;
    password: string;
}

export interface RegisterUserPayload{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  type: 'ADMIN' | 'EMPLOYEE' | 'PATRON';
}

export interface RegisterUserPayload{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  type: 'ADMIN' | 'EMPLOYEE' | 'PATRON';
}

export interface FetchUserPayload {
  userId: string;
  property:'loggedInUser'|'profileUser';
}