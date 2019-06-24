import {Component, OnInit} from '@angular/core';
import {User} from '@/model';
import {AuthService, UserService} from '@/service';
import {AlertHelper} from '@/_helper';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
    private _step;
    public currentUser: User;
    public isValidToSaveUser: boolean;
    public isRequesting: boolean;

    constructor(private authService: AuthService,
                private userService: UserService,
                private alertHelper: AlertHelper) {
    }

    public ngOnInit() {
        this.setStep(0);
        this.currentUser = this.authService.currentUser;
        this.isValidToSaveUser = false;
        this.isRequesting = false;
    }


    public isStep(value: number): boolean {
        return this._step === value;
    }

    public setStep(value: number): void {
        this._step = value;
    }

    public onClickUpdate(): void {
        if (!this.isValidToSaveUser) {
            return;
        }

        this.isRequesting = true;
        this.userService.update(this.currentUser)
            .then(_ => {
                this.setStep(1);
                this.alertHelper.success('Dados atualizados com sucesso.');
            })
            .catch(error => this.alertHelper.error(error))
            .finally(() => (this.isRequesting = false));
    }
}
