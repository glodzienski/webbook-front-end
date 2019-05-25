import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserRegisterService} from '@/_service';
import {User} from '@/_model';
import {AlertHelper} from '@/_helper';

@Component({
    selector: 'app-login',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private userRegisterService: UserRegisterService,
                private alertService: AlertHelper,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router) {
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

        const payload = new User();
        payload.email = this.registerForm.value.email;
        payload.password = this.registerForm.value.password;
        payload.cpf = this.registerForm.value.cpf;
        payload.birthdayDate = this.registerForm.value.birthdayDate;
        payload.name = this.registerForm.value.name;
        payload.lastName = this.registerForm.value.lastName;

        this.userRegisterService.register(payload)
            .then(_ => {
                this.alertService.success('Parabéns, agora você possui uma conta WebBook.');
                this.router.navigate(['login']);
            })
            .catch((error) => this.alertService.error(error));
    }
}
