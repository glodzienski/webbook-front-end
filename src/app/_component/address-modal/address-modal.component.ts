import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddressService} from '@/_service';
import {Address} from '@/_model';
import {AlertHelper} from '@/_helper';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-address-modal',
    templateUrl: './address-modal.component.html',
    styleUrls: ['./address-modal.component.less']
})
export class AddressModalComponent implements OnInit {
    public addressForm: FormGroup;

    constructor(private dialogRef: MatDialogRef<AddressModalComponent>,
                private formBuilder: FormBuilder,
                private addressService: AddressService,
                private alertHelper: AlertHelper) {
    }

    ngOnInit() {
        this.addressForm = this.formBuilder.group({
            zipCode: ['', Validators.required],
            country: ['', Validators.required],
            state: ['', Validators.required],
            city: ['', Validators.required],
            neighborhood: ['', Validators.required],
            street: ['', Validators.required],
            number: ['', Validators.required]
        });
    }

    public onClickRegisterAddress(): void {
        debugger;
        if (this.addressForm.invalid) {
            this.alertHelper.warn('Faltaram algumas informações, que tal checar o formulário?')
            return;
        }

        const address = new Address();
        Object.assign(address, this.addressForm.value);

        this.addressService.store(address)
            .then(_ => {
                this.alertHelper.success('Endereço cadastrado com sucesso!');
                this.dialogRef.close();
            })
            .catch(error => this.alertHelper.error(error));
    }
}
