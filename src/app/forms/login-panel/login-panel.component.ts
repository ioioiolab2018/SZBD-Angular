import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'szbd-login-panel',
    templateUrl: './login-panel.component.html',
    styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.authenticationService.logout();
    }

    ngOnInit() {}

    login(): void {
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService
            .login(
                this.loginForm.get('username').value,
                this.loginForm.get('password').value
            )
            .pipe(first())
            .subscribe(
                data => {
                    this.loading = false;
                    data['isEmployee']
                        ? this.router.navigateByUrl('/employee')
                        : this.router.navigateByUrl('/student');
                },
                error => {
                    this.error = error;
                    this.loading = false;
                }
            );
    }
}
