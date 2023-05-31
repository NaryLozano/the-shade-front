export interface UserTokenStructure {
  username: string;
  id: string;
  token: string;
  isLogged: boolean;
}

export interface UserStateStructure extends UserTokenStructure {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}
