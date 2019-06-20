import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {AddressService} from '@/service';
import {AlertHelper} from '@/_helper';
import {Address, Plan} from '@/model';
import {PlanService} from '@/service/plan.service';

@Component({
    selector: 'app-subscription-register-modal',
    templateUrl: './subscription-register-modal.component.html',
    styleUrls: ['./subscription-register-modal.component.less']
})
export class SubscriptionRegisterModalComponent implements OnInit {
    public subscriptionForm: FormGroup;
    public plans: Plan[];
    public addresses: Address[];

    constructor(private dialogRef: MatDialogRef<SubscriptionRegisterModalComponent>,
                private formBuilder: FormBuilder,
                private planService: PlanService,
                private addressService: AddressService,
                private alertHelper: AlertHelper) {
    }

    ngOnInit() {
        this.planService.get()
            .then(plans => (this.plans = plans));
        this.addressService.get()
            .then(addresses => (this.addresses = addresses));
        this.subscriptionForm = this.formBuilder.group({
            zipCode: ['', Validators.required]
        });
    }

    public onClickRegisterSubscription(): void {
        if (this.subscriptionForm.invalid) {
            this.alertHelper.warn('Faltaram algumas informações, que tal checar o formulário?');
            return;
        }

        const address = new Address();
        Object.assign(address, this.subscriptionForm.value);

        this.addressService.store(address)
            .then(_ => {
                this.alertHelper.success('Assinatura contratada com sucesso!');
                this.dialogRef.close();
            })
            .catch(error => this.alertHelper.error(error));
    }
}
