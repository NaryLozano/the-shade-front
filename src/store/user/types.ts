export interface UserTokenStructure {
  username: string;
  id: string;
  token?: string;
}
export interface UserDecoded {
  username: string;
  id: string;
}
export interface UserStateStructure extends UserTokenStructure {
  isLogged?: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}
