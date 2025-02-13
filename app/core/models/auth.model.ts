export class AuthModel {
    token!: string;
    expiresIn!: number;
  
    AuthModel(auth: any) {
      this.token = auth.token;
      this.expiresIn = auth.expiresIn;
    }
  }