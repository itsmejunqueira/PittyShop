export class AuthModel {
    token!: string;
    expiresIn!: Date;
  
    AuthModel(auth: any) {
      this.token = auth.token;
      this.expiresIn = auth.expiresIn;
    }
  }