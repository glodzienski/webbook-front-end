import {Component, OnInit} from '@angular/core';
import {User} from '@/_model';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
    public currentUser: User;
    public isValidToSaveUser: boolean;
    private _step;

    constructor() {
    }

    ngOnInit() {
        this.setStep(0);
        this.currentUser = new User();
        this.isValidToSaveUser = false;
    }


    isStep(value: number): boolean {
        return this._step === value;
    }

    setStep(value: number) {
        this._step = value;
    }
}
