import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '@/service';
import {User} from '@/model';
import {AlertHelper} from '@/_helper';

@Component({
    selector: 'app-login',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
    public currentUser: User;
    public isValidToSaveUser: boolean;

    constructor(private userService: UserService,
                private alertHelper: AlertHelper,
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

        this.userService.store(this.currentUser)
            .then(_ => {
                this.alertHelper.success('Parabéns, agora você possui uma conta WebBook.');
                this.router.navigate(['login']);
            })
            .catch((error) => this.alertHelper.error(error));
    }
}
