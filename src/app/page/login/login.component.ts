import {Component, OnInit} from '@angular/core';
import {AuthLoginDto} from '@/_dto';
import {AuthService} from '@/_service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertHelper} from '@/_helper';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    returnUrl: string;

    constructor(private authService: AuthService,
                private alertService: AlertHelper,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router) {
        if (this.authService.currentToken) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }

    get f() { return this.loginForm.controls; }

    public onClickLogin = () => {
        if (this.loginForm.invalid) {
            return;
        }

        const payload = new AuthLoginDto(this.loginForm.value.email, this.loginForm.value.password);
        this.authService.login(payload)
            .then(_ => this.router.navigate([this.returnUrl]))
            .catch((error) => this.alertService.error(error));
    }
}
