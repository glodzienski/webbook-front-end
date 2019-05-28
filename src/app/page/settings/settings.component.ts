import {Component, OnInit} from '@angular/core';
import {User} from '@/_model';
import {AuthService, UserService} from '@/_service';
import {AlertHelper} from '@/_helper';
import {MatDialog} from '@angular/material';
import {AddressModalComponent} from '@/_component/address-modal/address-modal.component';

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
                private alertHelper: AlertHelper,
                public modal: MatDialog) {
    }

    ngOnInit() {
        this.setStep(0);
        this.currentUser = this.authService.currentUser;
        this.isValidToSaveUser = false;
        this.isRequesting = false;
    }


    isStep(value: number): boolean {
        return this._step === value;
    }

    setStep(value: number): void {
        this._step = value;
    }

    onClickUpdate(): void {
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

    onClickRegisterAddress(): void {
        this.modal.open(AddressModalComponent, {
            width: '80%',
        });
    }
}
