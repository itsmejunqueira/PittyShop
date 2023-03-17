import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: any;
  senha: any;
  formlogin!: FormGroup;
  returnUrl!: string;
  hasError!: boolean;
  public show_eye: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadForm();
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  loadForm() {
    this.formlogin = this.fb.group({
      email: ['', Validators.compose([Validators.required,Validators.email])],
      senha: ['', Validators.compose([Validators.required])],
    });
  }

  submit() {
    this.hasError = false;
    this.authService
      .login(this.formlogin.value.login, this.formlogin.value.senha)
      .subscribe((user) => {
        if (user) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.hasError = true;
        }
      });
  }
}
