declare interface Window {
  DEBUG: boolean;
  _IS_LOCAL: boolean;
  loginUser: LoginUser;
}

declare interface LoginUser {
  userName: string;
  nickName: string;
  avatarUrl: string;
}
