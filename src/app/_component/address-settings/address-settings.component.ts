import {Component, OnInit} from '@angular/core';
import {AddressRegisterModalComponent} from '@/_component/address-register-modal/address-register-modal.component';
import {MatDialog} from '@angular/material';
import {Address} from '@/model';
import {AddressService} from '@/service';
import {AlertHelper} from '@/_helper';

@Component({
    selector: 'app-address-settings',
    templateUrl: './address-settings.component.html',
    styleUrls: ['./address-settings.component.less']
})
export class AddressSettingsComponent implements OnInit {
    public addresses: Address[];
    public addressesTableDisplayedColumns: string[];
    public isRequesting: boolean;

    constructor(private modal: MatDialog,
                private addressService: AddressService,
                private alertHelper: AlertHelper) {
    }

    ngOnInit() {
        this.addressesTableDisplayedColumns = [
            'zipCode',
            'country',
            'state',
            'city',
            'neighborhood',
            'street',
            'number',
            'delete'
        ];
        this.listAddresses();
    }

    private listAddresses(): void {
        this.isRequesting = true;
        this.addresses = null;
        this.addressService.get()
            .then(addresses => (this.addresses = addresses))
            .catch(error => this.alertHelper.error(error))
            .finally(_ => (this.isRequesting = false));
    }

    public onClickRegisterAddress(): void {
        this.modal
            .open(AddressRegisterModalComponent, {
                width: '80%'
            })
            .afterClosed()
            .subscribe(_ => (this.listAddresses()));
    }

    public hasContentToShowTable(): boolean {
        return this.addresses && this.addresses.length > 0;
    }

    public onClickDeleteAddress(address: Address): void {
        this.isRequesting = true;
        this.addressService.delete(address)
            .then(_ => {
                this.listAddresses();
                this.alertHelper.success('Endereço excluído com sucesso.');
            })
            .catch(error => this.alertHelper.error(error))
            .finally(_ => (this.isRequesting = false));
    }
}
