import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-recovery-pass',
  templateUrl: './recovery-pass.component.html',
  styleUrls: ['./recovery-pass.component.scss']
})
export class RecoveryPassComponent {
  public formlogin = new FormGroup({
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
  });
  
  constructor(
    private _authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {  }
  public async submit() {
    if (this.formlogin.invalid) {
      return;
    }
    this.router.navigate(['login']);
    // await this._authService.login(this.formLogin.value);
  }
}
