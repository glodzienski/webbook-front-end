import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '@/_model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {
    private user: User;
    userForm: FormGroup;

    @Input() model: User;
    @Output() modelChange = new EventEmitter();

    @Input() isValid: boolean;
    @Output() isValidChange = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            cpf: ['', Validators.required],
            birthdayDate: ['', Validators.required],
            name: ['', Validators.required],
            lastName: ['', Validators.required]
        });
        this.registerFormBuilderOnChangeEventListener();
        this.user = this.model;
    }

    private registerFormBuilderOnChangeEventListener(): void {
        this.userForm.valueChanges.subscribe(values => {
            Object.assign(this.user, values);
            this.modelChange.emit(this.user);
            this.isValidChange.emit(!this.userForm.invalid);
        });
    }
}
