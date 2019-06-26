import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AddressService, PlanService, SubscriptionService} from '@/service';
import {AlertHelper} from '@/_helper';
import {Address, Plan, Subscription} from '@/model';
import {AddressRegisterModalComponent} from '@/_component/address-register-modal/address-register-modal.component';

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
                private subscriptionService: SubscriptionService,
                private addressModal: MatDialog,
                private alertHelper: AlertHelper) {
    }

    ngOnInit() {
        this.listAddresses();

        this.planService.get()
            .then(plans => (this.plans = plans));

        this.subscriptionForm = this.formBuilder.group({
            plan: ['', Validators.required],
            address: ['', Validators.required]
        });
    }

    public onClickRegisterSubscription(): void {
        if (this.subscriptionForm.invalid) {
            this.alertHelper.warn('Faltaram algumas informações, que tal checar o formulário?');
            return;
        }

        const subscription = new Subscription();
        subscription.address = this.subscriptionForm.value.address as Address;
        subscription.plan = this.subscriptionForm.value.plan as Plan;

        this.subscriptionService.store(subscription)
            .then(_ => {
                this.alertHelper.success('Plano assinado com sucesso!');
                this.dialogRef.close();
            })
            .catch(error => this.alertHelper.error(error));
    }

    public doesNotHaveAdreesses(): boolean {
        const doesHaveAddresses = !!this.addresses && this.addresses.length > 0;

        return !doesHaveAddresses;
    }

    public onClickAddAddress(): void {
        this.addressModal
            .open(AddressRegisterModalComponent, {
                width: '80%'
            })
            .afterClosed()
            .subscribe(_ => this.listAddresses());
    }

    private listAddresses(): void {
        this.addresses = [];
        this.addressService.get()
            .then(addresses => (this.addresses = addresses))
            .catch(error => this.alertHelper.error(error));
    }
}
