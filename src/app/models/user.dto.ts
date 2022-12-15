export interface UserDto {
  login: string;
  password: string;
  isAdmin: boolean;
  idSousAgence?: number;
  idAgence?: number;
}
