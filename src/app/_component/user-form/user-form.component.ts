import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '@/model';
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
        this.user = this.model;
        this.userForm = this.formBuilder.group({
            email: [this.model.email, [Validators.required, Validators.email]],
            password: ['', Validators.required],
            cpf: [this.model.cpf, Validators.required],
            birthdayDate: [this.model.birthdayDate, Validators.required],
            name: [this.model.name, Validators.required],
            lastName: [this.model.lastName, Validators.required]
        });
        this.registerFormBuilderOnChangeEventListener();
    }

    private registerFormBuilderOnChangeEventListener(): void {
        this.userForm.valueChanges.subscribe(values => {
            Object.assign(this.user, values);
            this.modelChange.emit(this.user);
            this.isValidChange.emit(!this.userForm.invalid);
        });
    }
}
