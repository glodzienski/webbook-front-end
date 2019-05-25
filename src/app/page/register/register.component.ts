import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '@/_service';
import {User} from '@/_model';
import {AlertHelper} from '@/_helper';

@Component({
    selector: 'app-login',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
    public currentUser: User;
    public isValidToSaveUser: boolean;

    constructor(private userRegisterService: UserService,
                private alertService: AlertHelper,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.currentUser = new User();
        this.isValidToSaveUser = false;
    }

    public onClickRegister = () => {
        if (!this.isValidToSaveUser) {
            return;
        }

        this.userRegisterService.store(this.currentUser)
            .then(_ => {
                this.alertService.success('Parabéns, agora você possui uma conta WebBook.');
                this.router.navigate(['login']);
            })
            .catch((error) => this.alertService.error(error));
    }
}
