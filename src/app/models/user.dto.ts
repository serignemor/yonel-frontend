export interface UserDto {
  id?: number;
  login: string;
  password: string;
  isAdmin: boolean;
  idSousAgence?: number;
  idAgence?: number;
}
