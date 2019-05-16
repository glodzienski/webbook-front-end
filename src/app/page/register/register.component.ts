import {Component, OnInit} from '@angular/core';
import {AuthLoginDTO} from '@/_dto';
import {AlertService, AuthService} from '@/_service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private authService: AuthService,
                private alertService: AlertService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router) {
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            cpf: ['', Validators.required],
            birthdayDate: ['', Validators.required],
            name: ['', Validators.required],
            lastName: ['', Validators.required]
        });
    }

    get f() {
        return this.registerForm.controls;
    }

    public onClickRegister = () => {
        if (this.registerForm.invalid) {
            return;
        }
        debugger;

        const payload = new AuthLoginDTO(this.registerForm.value.email, this.registerForm.value.password);
        this.authService.login(payload)
            .then(_ => this.router.navigate([this.returnUrl]))
            .catch((error) => this.alertService.error(error));
    }
}
